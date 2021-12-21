import React from "react";
import { Field, reduxForm } from "redux-form";

function Form(props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name*</label>
      <Field type="text" component="input" name="title" required={true} />

      <label htmlFor="description">Description*</label>
      <Field type="text" component="input" name="description" required={true} />

      <label htmlFor="price">Price*</label>
      <Field type="number" component="input" name="price" required={true} />

      <label htmlFor="rating">Rating</label>
      <Field type="number" component="input" name="rating" />

      <label htmlFor="image">Image URL</label>
      <Field type="text" component="input" name="image" />

      <button type="submit">Add</button>
    </form>
  );
}

export default reduxForm({
  form: "addProduct",
})(Form);
