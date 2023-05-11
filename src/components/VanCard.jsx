import { Link } from "react-router-dom"

function VanCard(props) {
  return (
    <div key={props.key} className="van-tile">
      <Link to={`${props.key}`}>

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
