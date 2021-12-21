import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchProducts } from "../actions/products";
import Home from "./Home";
import Navbar from "./Navbar";
import ProductPage from "./ProductPage";
import ProductAdd from "./ProductAdd";
import Cart from "./Cart";
import Page404 from "./Page404";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { products } = this.props;

    return (
      <Router>
        <div className="App">
          <Navbar products={products} />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home products={products} />;
              }}
            />
            <Route
              path="/productpage/:id"
              render={(props) => {
                return <ProductPage props={props} />;
              }}
            />
            <Route path="/productadd" component={ProductAdd} />
            <Route path="/cart" component={Cart} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(mapStateToProps)(App);
