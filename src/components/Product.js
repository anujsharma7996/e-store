//import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "../ProductStyle.css";
import { addToCart } from "../actions/cart";
import { deleteProduct, updateDescription } from "../actions/products";

function Product({ product }) {
  const dispatch = useDispatch();

  // State for enabling/disabling edit mode
  const [editMode, setEditMode] = useState(false);

  // State for handling input
  const [descriptionInput, setDescriptionInput] = useState("");

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleInput = (e) => {
    setDescriptionInput(e.target.value);
    //console.log(e.target.value);
  };

  const handleChange = () => {
    dispatch(updateDescription(product.id, descriptionInput));
    setEditMode(!editMode);
  };

  const handleDelete = () => {
    dispatch(deleteProduct(product));
  };

  return (
    <div className="product-list">
      <div className="prod-card" key={product.id}>
        <div className="prod-details">
          <img className="prod-img" alt="product" src={product.image} />
          <div>
            <button>
              <Link to={`/productpage/${product.id}`}>
                <h3 className="prod-title">{product.title}</h3>
              </Link>
            </button>
            <br />
            <span>{product.rating}/5</span>
            <img
              className="star"
              alt="stars"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            />

            <h3 className="prod-price">₹{product.price}</h3>

            {editMode ? (
              <input
                className="prod-input-desc"
                onChange={handleInput}
                placeholder={product.description}
              />
            ) : (
              <div className="prod-desc">{product.description}</div>
            )}
          </div>

          <div className="prod-actions">
            <button className="cart-style" onClick={() => handleCart(product)}>
              <img
                alt="cart"
                src="https://cdn-icons-png.flaticon.com/128/34/34568.png"
              />
            </button>

            {editMode ? (
              <div className="save-discard-btn">
                <button onClick={handleChange}>Save</button>
                <button onClick={handleEditMode}>Discard</button>
              </div>
            ) : (
              <button onClick={handleEditMode}>
                <img
                  alt="edit"
                  src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                />
              </button>
            )}

            <button onClick={handleDelete}>
              <img
                alt="delete"
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     products: state.products,
//   };
// }

export default Product;
