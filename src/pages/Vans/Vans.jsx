import { useEffect, useState } from "react";
import VanCard from "../../components/VanCard";

function Vans() {
  const [allCards, setAllCards] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) =>
        setAllCards(
          data.vans.map((item) => {
            console.log(item)
            return (
              < VanCard
                key={item.id}
                id={item.id}
                img={item.imageUrl}
                name={item.name}
                price={item.price}
                description={item.description}
                type={item.type}
              />
            );
          })
        )
      );
  }, []);
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {allCards}
      </div>
    </div>
  )
}

export default Vans;
