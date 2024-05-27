import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../../Header/Header";
import { useGetproductByNameQuery } from "../../../Redux/productApi";
import Lodinge from "../../loding/loding";
import { useDispatch, useSelector } from "react-redux";
import { addCart, setProducts } from "../../../Redux/counterSlice";
import { useNavigate } from "react-router";
import SiedBar from "../../SiedBar/SedBar";

export default function Home() {
  const { data, isLoading } = useGetproductByNameQuery("bulbasaur");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setshow] = useState(""); //  Show SnackBar => Add to Cart

  const { filteredProducts } = useSelector((state) => state.UserStor);

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <>
        <Header />
        <Lodinge />
      </>
    );
  }

  //  Show SnackBar => Add to Cart
  const showSnackbar = () => {
    setshow("show");

    setTimeout(() => {
      setshow("");
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className="home">
        <div id="snackbar" className={show}>
        The shopping cart has been added successfully.. <i class='bx bx-check-circle'></i>
        </div>
        <SiedBar />
        <div className="home-container">
          {filteredProducts.map((item) => (
            <div className="card-item" key={item.id}>
              <div
                className="img"
                onClick={() => navigate(`prodect-detalis/${item.id}`)}
              >
                <img src={item.imgList[0]} alt="" />
              </div>
              <div className="body-card">
                <div className="price">
                  <h4>{item.price}</h4>
                  <p>299.99</p>
                </div>
                <div className="name-item">
                  <h5>{item.name}</h5>
                  <div className="star">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star-half"></i>
                  </div>
                </div>
                <p style={{ textAlign: "center" }}>{item.description}</p>
                <div className="add-cart">
                  <i className="bx bx-share-alt"></i>
                  <i className="bx bxs-heart"></i>
                  <button
                    onClick={() => {
                      dispatch(addCart(item));
                      showSnackbar();
                    }}
                  >
                    <i className="bx bx-cart-alt"></i> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
