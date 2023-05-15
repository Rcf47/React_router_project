import { useEffect, useState } from "react";
import VanCard from "../../components/VanCard";
import { useSearchParams } from "react-router-dom";

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
      <div className="van-list">{displayedVans}</div>
    </div>
  );
}

export default Vans;
