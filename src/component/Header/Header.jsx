import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import { Link } from "react-router-dom";
import { searchProduct } from "../../Redux/counterSlice";

export default function Header() {
  const { myCart, searchTerm } = useSelector((state) => state.UserStor);
  const dispatch = useDispatch();

  return (
    <header className="heder">
      <nav className="NavBar">
        <div className="">
          <Link to="/" className="brand">
            <span>B</span>rand
          </Link>
        </div>

        <div className="search">
          <label>
            <input
              type="search"
              placeholder="ابحث عن منتج"
              value={searchTerm}
              onChange={(e) => dispatch(searchProduct(e.target.value))}
            />
            <i className='bx bx-search-alt-2'></i>
          </label>
        </div>

        <Link to="/cart">
          <div className="cart">
            <h4>Cart</h4>
            <i className="bx bx-cart-alt"></i>
            <span>{myCart.length}</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}
