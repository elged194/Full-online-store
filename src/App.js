// import Header from "./component/Header/Header";
import Cart from "./component/Page/cart/cart";
import Home from "./component/Page/Home/home";
// React Router v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProdectDetalis from "./component/Page/Prodect Detalis/ProdectDetalis";
import Payment from "./component/Page/payment/payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/cart",
    element: <Cart />,
  },

  {
    path: "/cart/payment",
    element: <Payment />,
  },

  {
    path: "prodect-detalis/:prodectId",
    element: <ProdectDetalis />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
