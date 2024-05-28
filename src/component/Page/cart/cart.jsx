import "./cart.css";
import Header from "../../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotals,
  decrement,
  deledeItem,
  increment,
  searchProductCart,
} from "../../../Redux/counterSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Cart() {
  const { myCart, searchTerm, filteredProducts, totale, salesTax } =
    useSelector((state) => state.UserStor);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let subTotal = 0;

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchProductCart(searchTerm));
    }
  }, [searchTerm, dispatch]);

  useEffect(() => {
    dispatch(calculateTotals(subTotal));
  }, [myCart, dispatch, subTotal]);

  const productsToDisplay = searchTerm ? filteredProducts : myCart;

  return (
    <>
      <Header />
      <div className="myCart">
        {productsToDisplay.map((e) => {
          subTotal += e.price * e.quantity;
          return (
            <div className="item-cart" key={e.id}>
              <img src={e.imgList[0]} alt="" />
              <div className="item-cart-info">
                <div className="">
                  <h3> {e.name}</h3>
                  <p>{e.discripton} </p>
                </div>

                <div className="counter">
                  <button onClick={() => dispatch(increment(e))}>+</button>
                  <h6>{e.quantity} </h6>
                  <button onClick={() => dispatch(decrement(e))}>-</button>
                </div>

                <h6>${e.price * e.quantity}</h6>

                {/* Remover Item */}
                <i
                  className="bx bx-trash"
                  onClick={() => dispatch(deledeItem(e))}
                ></i>
              </div>
            </div>
          );
        })}

        <div className="total-cart">
          <div className="">
            Subtotal: <span>$ {subTotal} </span>{" "}
          </div>
          <hr />
          <div className="">
            Sales Tax: <span>$ {salesTax} </span>{" "}
          </div>
          <hr />
          <div className="">
            Grand Total: <span>$ {totale.toFixed(2)} </span>
          </div>
          <hr />
          <button onClick={() => navigate(`/payment`)}>Check Out</button>
        </div>
      </div>
    </>
  );
}
