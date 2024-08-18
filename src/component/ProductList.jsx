import React, { useContext } from "react";
import cartContext from "./CartProvider";
import { FaBagShopping } from "react-icons/fa6";

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 15 },
  { id: 3, name: "Product C", price: 20 },
];

const ProductList = () => {
  const { dispatch } = useContext(cartContext);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <>
      <div className="mt-2">
        <h2>
          <FaBagShopping className="productlist-icon" />
          Products
        </h2>

        {products.map((product) => (
          <div className="card" style={{ width: "18rem" }} key={product.id}>
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-text">Price: {product.price}</p>
              <button
                type="click"
                className="btn btn-primary"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
