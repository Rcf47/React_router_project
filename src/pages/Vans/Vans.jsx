import { useEffect, useState } from "react";
import VanCard from "./VanCard.jsx";
import { useSearchParams } from "react-router-dom";
import getVans from "../../api.js";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allCards, setAllCards] = useState([]);
  const typeFilter = searchParams.get("type");

  const vansElements = allCards.map((item) => {
    return (
      <VanCard
        key={item.id}
        id={item.id}
        img={item.imageUrl}
        name={item.name}
        price={item.price}
        description={item.description}
        type={item.type}
      />
    );
  });

  const displayedVans = typeFilter
    ? vansElements.filter(
      (char) => char.props.type.toLowerCase() === typeFilter
    )
    : vansElements;

  useEffect(() => {
    async function loadVans() {
      const data = await getVans()
      setAllCards(data)
    }

    loadVans()
  }, []);

  function handleFilterChange(key, value) {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <button
        onClick={() => handleFilterChange("type", "simple")}
        className={`van-type simple ${typeFilter === "simple" ? "selected" : null
          }`}
      >
        Simple
      </button>
      <button
        onClick={() => handleFilterChange("type", "luxury")}
        className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}
      >
        Luxury
      </button>
      <button
        onClick={() => handleFilterChange("type", "rugged")}
        className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}
      >
        Rugged
      </button>
      {typeFilter ? (
        <button
          onClick={() => handleFilterChange("type", null)}
          className={`van-type clear-filters`}
        >
          Clear filter
        </button>
      ) : null}
      <div className="van-list">{displayedVans}</div>
    </div>
  );
}

export default Vans;
