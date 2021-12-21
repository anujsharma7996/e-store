import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/products";
import { reset } from "redux-form";
import "../ProductAddStyle.css";
import Form from "./Form";

function ProductAdd(props) {
  const dispatch = useDispatch();
  const [style, setStyle] = useState("add-container");

  const submit = (values) => {
    const { description, price, rating, title, image } = values;
    setTimeout(() => {
      setStyle("add-container2");
    }, 1000);

    dispatch(addProduct(title, rating, price, description, image));
    dispatch(reset("addProduct"));

    setTimeout(function () {
      setStyle("add-container");
    }, 3000);
  };

  return (
    <div className={style}>
      <h4>Add a Product</h4>
      <Form onSubmit={submit} />
    </div>
  );
}

export default ProductAdd;
