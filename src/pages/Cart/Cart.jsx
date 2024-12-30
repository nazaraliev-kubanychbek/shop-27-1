import { useSelector } from "react-redux";
import "./cart.scss";
import { useDispatch } from "react-redux";
import { addCart, decrementCart, deleteCart } from "../../redux/reducer";

const Cart = () => {
  const cartData = useSelector((s) => s.reducer.cart);
  const dispatch = useDispatch();
  return (
    <div className="cart-page">
      <div className="container">
        {cartData.map((item) => {
          return (
            <div key={item.id} className="cart-item">
              <div className="cart-item-left">
                <img src={item.image} alt="" className="cart-item-img" />
                <h2 className="cart-item-title">{item.title}</h2>
              </div>
              <div className="cart-item-right">
                <div className="cart-item-count">
                  <button
                    onClick={() => {
                     if(item.count > 1) dispatch(decrementCart(item));
                    }}
                  >
                    -
                  </button>
                  <p>{item.count}</p>
                  <button
                    onClick={() => {
                      dispatch(addCart(item));
                    }}
                  >
                    +
                  </button>
                </div>
                <p className="cart-item-price">
                  ${(item.price * item.count).toFixed(2)}
                </p>
                <button
                  className="cart-item-delete-btn"
                  onClick={() => {
                    dispatch(deleteCart(item));
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}

        <p>
          <b>Total:</b>$
          {cartData
            .reduce((acc, rec) => {
              return acc + rec.price * rec.count;
            }, 0)
            .toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
