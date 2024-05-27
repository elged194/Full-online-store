import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByPrice } from "../../Redux/counterSlice";
// import { filterByPrice } from "../../../Redux/counterSlice";

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterByPrice({ min: minPrice, max: maxPrice }));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      <button onClick={handleFilter}>Filter by Price</button>
    </div>
  );
};

export default PriceFilter;
