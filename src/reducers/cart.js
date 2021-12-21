import {
  ADD_TO_CART,
  DEC_QUANTITY,
  DELETE_PRODUCT_CART,
  INC_QUANTITY,
} from "../actions/actionTypes";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function cart(state = [], action) {
  //console.log("ACTION CART", action.product);
  switch (action.type) {
    case ADD_TO_CART:
      const exist = state.find((a) => a.id === action.product.id);

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
      toast.success("Added item to Cart", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      if (exist) {
        return state.map((a) =>
          a.id === action.product.id ? { ...a, quantity: a.quantity + 1 } : a
        );
      } else {
        return [...state, { ...action.product, quantity: 1 }];
      }

    case INC_QUANTITY:
      const index = state.findIndex((prod) => prod.id === action.productid);
      // console.log("MYACTION", state[index].quantity);
      state[index].quantity = state[index].quantity + 1;
      return [...state];

    case DEC_QUANTITY:
      const index2 = state.findIndex((prod) => prod.id === action.productid);
      // console.log("MYACTION", state);
      state[index2].quantity = state[index2].quantity - 1;

      if (state[index2].quantity === 0) {
        return (state = state.filter((prod) => {
          return prod.id !== action.productid;
        }));
      }
      return [...state];

    case DELETE_PRODUCT_CART:
      //const index3 = state.findIndex((prod) => prod.id === action.productid);
      return (state = state.filter((prod) => {
        return prod.id !== action.productid;
      }));

    default:
      return state;
  }
}
