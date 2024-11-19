import "./App.css";
import Header from "./Header.jsx";
import CategoryFilters from "./CategoryFilters";
import Sidebar from "./components/Sidebar/Sidebar";

import item1 from "./assets/item1.jpg";
import item2 from "./assets/item2.jpg";
import item3 from "./assets/item3.jpg";
import item4 from "./assets/item4.jpg";
import { createContext, useState } from "react";
import Home from "./components/Home/Home.jsx";
import { Outlet } from "react-router-dom";

const ThemeContext = createContext();

function App() {
  const [open, setSidebar] = useState(false);
  const [theme, setTheme] = useState("light");
  const [totalCartCount, setCartCount] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]").reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0)
  );
  console.log(totalCartCount);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* For sidebar not to be excluded beside the main page, else where we can scroll to the home page even with the sidebar open */}
      <div className="overflow-auto max-h-[100vh]">
        <Header totalCartCount={totalCartCount} setCartCount={setCartCount} />
        <CategoryFilters open={open} setSidebar={setSidebar} />
        {/* <div className="App">
        <Home totalCartCount={totalCartCount} setCartCount={setCartCount} />
      </div> */}
        <Outlet />
        {/* Renders the child according to the path */}
        <Sidebar open={open} setSidebar={setSidebar} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };

const data = [
  {
    title: " Custom Appliances for your home | Up to 55% off",
    items: [
      {
        image: item1,
        title: "Air Conditioner",
      },
      {
        image: item2,
        title: "Refrigirator",
      },
      {
        image: item3,
        title: "Microwaves",
      },
      {
        image: item4,
        title: "Washing Machine",
      },
    ],
    redirect: {
      label: "See more",
      url: "https://www.explorin.io",
    },
  },
];
