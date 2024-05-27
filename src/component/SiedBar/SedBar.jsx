import "./SiedBar.css";
import { useDispatch } from "react-redux";
import { filterByPrice } from "../../Redux/counterSlice";

export default function SiedBar() {
  const dispatch = useDispatch();

  const handlePriceChange = (min, max) => {
    dispatch(filterByPrice({ min, max }));
  };

  return (
    <nav className="siedBar">
      <div className="single-widget">
        <h3 className="titlee">FILTER BY PRICE</h3>
        <ul className="check-box-list">
          <li className="label-input">
            <span>Range: </span> $0 - $500
          </li>
          <li>
            <label className="checkbox-inline" htmlFor="1">
              <input
                name="price"
                id="1"
                type="radio"
                onChange={() => handlePriceChange(20, 50)}
              />
              $20 - $50 <span className="count">(3)</span>
            </label>
          </li>
          <li>
            <label className="checkbox-inline" htmlFor="2">
              <input
                name="price"
                id="2"
                type="radio"
                onChange={() => handlePriceChange(50, 100)}
              />
              $50 - $100 <span className="count">(5)</span>
            </label>
          </li>
          <li>
            <label className="checkbox-inline" htmlFor="3">
              <input
                name="price"
                id="3"
                type="radio"
                onChange={() => handlePriceChange(100, 250)}
              />
              $100 - $250 <span className="count">(8)</span>
            </label>
          </li>
          <li>
            <label className="checkbox-inline" htmlFor="4">
              <input
                name="price"
                id="4"
                type="radio"
                onChange={() => handlePriceChange(250, 500)}
              />
              $250 - $500 <span className="count">(11)</span>
            </label>
          </li>
          <li>
            <label className="checkbox-inline" htmlFor="5">
              <input
                name="price"
                id="5"
                type="radio"
                onChange={() => handlePriceChange(0, 1000)}
              />
              All Products <span className="count">( 6 )</span>
            </label>
          </li>
        </ul>
      </div>

      <div className="filter-brand">
        <h3 className="titlee">FILTER BY BRAND</h3>
        <form action="" method="post" className="more-brand">
          <label htmlFor="Nike">
            <input type="checkbox" name="BRAND" id="Nike" />
            <span> Nike </span>
          </label>
          <label htmlFor="Adidas">
            <input type="checkbox" name="BRAND" id="Adidas" />
            <span> Adidas </span>
          </label>
          <label htmlFor="Polo">
            <input type="checkbox" name="BRAND" id="Polo" />
            <span> Polo </span>
          </label>
          <label htmlFor="Lacost">
            <input type="checkbox" name="BRAND" id="Lacost" />
            <span> Lacost </span>
          </label>
          <label htmlFor="Puma">
            <input type="checkbox" name="BRAND" id="Puma" />
            <span> Puma </span>
          </label>
          <label htmlFor="ZARA">
            <input type="checkbox" name="BRAND" id="ZARA" />
            <span> ZARA </span>
          </label>
          <label htmlFor="Reebok">
            <input type="checkbox" name="BRAND" id="Reebok" />
            <span> Reebok </span>
          </label>
        </form>
      </div>
    </nav>
  );
}
