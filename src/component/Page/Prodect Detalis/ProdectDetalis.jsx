import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProdectDetalis.css";
import { useGetproductByNameQuery } from "../../../Redux/productApi";
import Header from "../../Header/Header";
import Lodinge from "../../loding/loding";
import { useDispatch } from "react-redux";
import { addCart } from "../../../Redux/counterSlice";


export default function ProdectDetalis() {
  // Get the userId param from the URL.
  let { prodectId } = useParams();

  // Ensure prodectId is treated as a number if your IDs are numbers
  prodectId = Number(prodectId);

  const { data, isLoading, error } = useGetproductByNameQuery("bulbasaur");

  const dispatch = useDispatch();

  const [indexx, setindex] = useState(0);

  // Lodinge
  if (isLoading) {
    return (
      <>
        <Header />
        <Lodinge />
      </>
    );
  }

  // error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    const getData = data.find((e) => e.id === prodectId);

    if (getData) {
      return (
        <>
          <Header/>
        <div className="prodect-detaise">
          {
            <div className="details">
              <div className="big-img">
                <img src={getData.imgList[indexx]} alt="" />
              </div>

              <div className="box">
                <div className="row">
                  <h2>{getData.name}</h2>
                  <span>${getData.price}</span>
                </div>
                {/* <Colors colors={item.colors} /> */}

                <p>{getData.description}</p>
                {/* <p>{item.content}</p> */}

                {/* imges */}
                <div className="thumb">
                  {getData.imgList.map((img, index) => (
                    <img
                      src={img}
                      alt="imge Lest"
                      key={index}
                      onClick={() => setindex(index)}
                    />
                  ))}
                </div>
                <button className="cart"
                onClick={() => dispatch(addCart(getData))}
                >Add to cart</button>
              </div>
            </div>
          }
        </div>
        </>
      );
    } else {
      return <div>Product not found</div>;
    }
  }

  return null;
}
