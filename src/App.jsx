import "./App.css";
import Header from "./Header";
import CategoryFilters from "./CategoryFilters";
import { BrowserRouter } from "react-router-dom";
import HomeCard from "./HomeCard";

import item1 from "./assets/item1.jpg";
import item2 from "./assets/item2.jpg";
import item3 from "./assets/item3.jpg";
import item4 from "./assets/item4.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryFilters />
      <div className="home-card-container">
        {[data, data, data, data, data, data, data, data]
          .flat() // Flat converts the 2d or 3d array into 1d array OR can use spread operator multipe times in ...data, ...data
          .map((currentData, index) => (
            <HomeCard key={"HomeCard-" + index} xyz="abc" data={currentData} />
          ))}
      </div>
    </div>
  );
}

export default App;

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
