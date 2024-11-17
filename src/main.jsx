import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Signin from "./components/SignIn/Signin.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { BrowserRouter } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import WrongPage from "./components/WrongPage.jsx";
import Product from "./DynamicProduct.jsx";
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: <Home />
      },
      {
        path: "cart", element: <Cart />
      },
      {
        path: "*", element: <NotFound />
      },
      {
        // path: "product/:productId/:sampleId",
        path: "product/:productId",
        element: <Product />
      }
    ]
  },
  { path: "/signin", element: <Signin /> },
  {
    path: "*", element: <WrongPage />
  }
], {
  basename: "/",
}
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoutes} />
  </StrictMode>
);
