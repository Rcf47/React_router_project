import { useEffect, useState } from "react";
import VanCard from "./VanCard.jsx";
import { Link, useSearchParams } from "react-router-dom";

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

  console.log(vansElements)
  const displayedVans = typeFilter
    ? vansElements.filter((char) => char.props.type.toLowerCase() === typeFilter)
    : vansElements;

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setAllCards(data.vans));
  }, []);
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <Link to="?type=simple" className="van-type simple">Simple</Link>
      <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
      <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
      <Link to="." className="van-type clear-filters">Clear filter</Link>
      <div className="van-list">{displayedVans}</div>
    </div>
  );
}

export default Vans;
