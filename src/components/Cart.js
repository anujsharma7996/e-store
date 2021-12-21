import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  decreaseProduct,
  deleteProductCart,
  increaseProduct,
} from "../actions/cart";
import "../ProductStyle.css";

function Cart(props) {
  const dispatch = useDispatch();

  // getting cart state
  const products = useSelector((state) => state.cart);

  // handling increase cart item quantity
  const handleIncrease = (product) => {
    dispatch(increaseProduct(product.id));
  };

  // handling decrease cart item quantity
  const handleDecrease = (product) => {
    dispatch(decreaseProduct(product.id));
  };

  // handling delete cart item
  const handleDeleteCart = (product) => {
    dispatch(deleteProductCart(product.id));
  };

  // check if cart is empty
  let check = true;
  if (products.length !== 0) {
    check = false;
  }

  // calculating total cost
  let total = 0;
  products.map((product) => {
    return (total = total + product.quantity * product.price);
  });

  return (
    <div>
      {check ? (
        <h2 className="no-items">Cart is empty</h2>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div className="prod-card" key={product.id + Math.random()}>
              <div className="prod-details">
                <img className="prod-img" alt="product" src={product.image} />
                <div>
                  <h3 className="prod-title">{product.title}</h3>
                  <br />
                  <span>{product.rating}/5</span>
                  <img
                    className="star"
                    alt="stars"
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                  />

                  <h3 className="prod-price">₹{product.price}</h3>

                  <div className="prod-quantity">
                    Quantity: {product.quantity}
                  </div>
                </div>

                <div className="prod-actions">
                  <button onClick={(e) => handleIncrease(product)}>
                    <img
                      alt="add"
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
                    />
                  </button>

                  <button onClick={(e) => handleDecrease(product)}>
                    <img
                      alt="remove"
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                    />
                  </button>

                  <button onClick={(e) => handleDeleteCart(product)}>
                    <img
                      alt="delete"
                      src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div>
            <h3>Total: {total}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
