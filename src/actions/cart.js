import {
  ADD_TO_CART,
  DEC_QUANTITY,
  DELETE_PRODUCT_CART,
  INC_QUANTITY,
} from "./actionTypes";
//import { FETCH_CART } from "./actionTypes";

export function addToCart(product) {
  //console.log("INACTION", product);
  return {
    type: ADD_TO_CART,
    product: product,
  };
}

export function increaseProduct(productid) {
  return {
    type: INC_QUANTITY,
    productid: productid,
  };
}

export function decreaseProduct(productid) {
  return {
    type: DEC_QUANTITY,
    productid: productid,
  };
}

export function deleteProductCart(productid) {
  return {
    type: DELETE_PRODUCT_CART,
    productid: productid,
  };
}
