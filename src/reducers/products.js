import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SORT_PRODUCTS,
  UPDATE_DESCRIPTION,
  UPDATE_PRODUCTS,
} from "../actions/actionTypes";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function products(state = [], action) {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return action.products;

    case UPDATE_DESCRIPTION:
      const index = state.findIndex((prod) => prod.id === action.id);
      state[index].description = action.description;

      <ToastContainer
        position="top-right"
        autoClose={2500}
        transition={Slide}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />;
      toast.success("Updated", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return [...state];

    case DELETE_PRODUCT:
      const result = state.filter((prod) => prod.id !== action.product);
      <ToastContainer
        position="top-right"
        autoClose={2500}
        transition="Slide"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />;
      toast.error("Deleted", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return result;

    case SORT_PRODUCTS:
      if (action.sort) {
        action.products.sort(function (a, b) {
          return a.price - b.price;
        });
        return [...state];
      } else {
        action.products.sort(function (a, b) {
          return a.id - b.id;
        });
        return [...state];
      }

    case ADD_PRODUCT:
      action.product.id = parseFloat(action.product.id);
      action.product.price = parseFloat(action.product.price);
      const toastTitle = action.product.title;

      <ToastContainer
        position="top-right"
        autoClose={2500}
        transition={Slide}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />;
      toast.success(toastTitle + " Added", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return [...state, action.product];

    default:
      return state;
  }
}
