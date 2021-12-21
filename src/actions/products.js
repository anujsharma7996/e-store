import {
  UPDATE_DESCRIPTION,
  UPDATE_PRODUCTS,
  SORT_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
} from "./actionTypes";

import { getFormBody } from "../helpers/getFormBody";

export function fetchProducts() {
  return (dispatch) => {
    const url =
      "https://my-json-server.typicode.com/anujsharma7996/ecom-db/products";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updateProducts(data));
      });
  };
}

export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    products,
  };
}

export function updateDescriptionn(id, description) {
  return (dispatch) => {
    fetch(
      `https://my-json-server.typicode.com/anujsharma7996/ecom-db/products/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getFormBody({ description }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateDescription(data.id, data.description));
      });
  };
}

export function updateDescription(id, description) {
  return {
    type: UPDATE_DESCRIPTION,
    id,
    description,
  };
}

export function deleteProduct(product) {
  return (dispatch) => {
    fetch(
      `https://my-json-server.typicode.com/anujsharma7996/ecom-db/products/${product.id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteProductMain(product.id));
      });
  };
}

export function deleteProductMain(product) {
  return {
    type: DELETE_PRODUCT,
    product: product,
  };
}

export function sortProducts(products, sort) {
  return {
    type: SORT_PRODUCTS,
    products: products,
    sort: sort,
  };
}

export function addProduct(title, rating, price, description, image, id) {
  return (dispatch) => {
    const id = Math.random();

    fetch(
      `https://my-json-server.typicode.com/anujsharma7996/ecom-db/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getFormBody({ id, title, rating, price, description, image }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(addProducts(data));
      });
  };
}

export function addProducts(product) {
  return {
    type: ADD_PRODUCT,
    product: product,
  };
}
