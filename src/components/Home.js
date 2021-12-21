import Product from "./Product";
import { sortProducts } from "../actions/products";
import "../HomeStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Home() {
  //const { products } = props;
  const [sort, setSort] = useState(true);

  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  function handleSort(e) {
    // console.log("COMPS", products);
    setSort(!sort);
    dispatch(sortProducts(products, sort));
  }

  return (
    <div className="Home-container">
      <button id="sort-btn" onClick={handleSort}>
        Sort
      </button>
      {products.map((product) => (
        <Product
          key={product.title + product.id}
          product={product}
          description={product.description}
          title={product.title}
          rating={product.rating}
          price={product.price}
        />
      ))}
    </div>
  );
}

// function mapStateToProps() {
//   return {
//     products: state.products,
//   };
// }

export default Home;
