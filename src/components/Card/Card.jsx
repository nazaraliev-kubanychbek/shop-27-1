import "./card.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/reducer";

const Card = ({ item }) => {
    const dispatch = useDispatch();
  return (
    <div className="card">
      <Link to={`/product/${item.id}`} style={{
        textDecoration: 'none',
        color: '#000'
      }}>
        <img src={item.image} alt="" className="card-img" />
        <h4 className="card-title">
          {item.title.length > 30
            ? item.title.substr(0, 27).trim() + "..."
            : item.title}
        </h4>
        <p className="card-description">
          {item.description.length > 35
            ? item.description.substr(0, 32).trim() + "..."
            : item.description}
        </p>
      </Link>

      <div className="card-block">
        <p className="card-price">${item.price}</p>
        <button className="card-button"
        onClick={()=>{
            dispatch(addCart(item))
        }}
        >buy</button>
      </div>
    </div>
  );
};

export default Card;
