import { Link } from "react-router-dom"

function VanCard(props) {
  return (
    <div id={props.id} className="van-tile">
      <Link to={`${props.id}`}>
        <img src={props.img} />
        <div className="van-info">
          <h3>{props.name}</h3>
          <p>${props.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${props.type} selected`}>{props.type}</i>
      </Link >
    </div>
  )
}

export default VanCard
