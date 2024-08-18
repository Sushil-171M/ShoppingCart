import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import CartContext from "./CartProvider";

const ShoppingCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  return (
    <div>
      <h2>
        <FaCartShopping />
        Shopping Cart
      </h2>
      {cart.map((item) => (
        <div className="card" style={{ width: "18rem" }} key={item.id}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Price: {item.price}</p>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
