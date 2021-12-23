import { Link } from "react-router-dom";
import "../NavbarStyle.css";
import { useSelector } from "react-redux";

function Navbar() {
  const state = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <button>
        <Link to="/e-store/">
          <h2>E-Store</h2>
        </Link>
      </button>

      <button>
        <Link to="/e-store/"> Products </Link>
      </button>

      <span>|</span>

      <button>
        <Link to="/productadd"> Add Product </Link>
      </button>

      <span>|</span>
      <button className="cart-btn">
        <Link to="/cart">
          <img
            className="cart"
            alt="cart"
            src="https://cdn-icons-png.flaticon.com/128/34/34568.png"
          />
          <span className="cart-amount">{state.length}</span>
        </Link>
      </button>
    </div>
  );
}

export default Navbar;
