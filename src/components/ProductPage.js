import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../actions/cart";
import { updateDescription } from "../actions/products";

function ProductPage(props) {
  let { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const [editMode, setEditMode] = useState(false);

  id = parseFloat(id);

  const index = products.findIndex((prod) => prod.id === id);

  const { title, description, price, image, rating } = products[index];

  console.log("PRICE", price);

  const [descriptionInput, setDescriptionInput] = useState("");

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleInput = (e) => {
    setDescriptionInput(e.target.value);
  };

  const handleChange = () => {
    dispatch(updateDescription(id, descriptionInput));
    setEditMode(!editMode);
  };

  return (
    <div>
      <div className="product-list">
        <div className="prod-card" key={id}>
          <div className="prod-details">
            <img className="prod-img" alt="product" src={image} />
            <div>
              <h3 className="prod-title">{title}</h3>
              <br />
              <span>{rating}/5</span>
              <img
                className="star"
                alt="stars"
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              />

              <h3 className="prod-price">₹{price}</h3>

              {editMode ? (
                <input
                  className="prod-input-desc"
                  onChange={handleInput}
                  placeholder={description}
                />
              ) : (
                <div className="prod-desc">{description}</div>
              )}
            </div>

            <div className="prod-actions">
              <button onClick={() => handleCart(products[index])}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
