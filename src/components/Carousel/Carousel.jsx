import React from "react";
import "./Carousel.css";
import image1 from "../../assets/carousel/photo1.jpg";
import image2 from "../../assets/carousel/photo2.jpg";
import image3 from "../../assets/carousel/photo3.jpg";
import image4 from "../../assets/carousel/photo4.jpg";
import image5 from "../../assets/carousel/photo5.jpg";
import image6 from "../../assets/carousel/photo6.jpg";
import image7 from "../../assets/carousel/photo7.jpg";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-blur-container"></div>
      <div className="carousel-img-container">
        <img src={image1} alt="" className="carousel-img" />
        <img src={image2} alt="" className="carousel-img" />
        <img src={image3} alt="" className="carousel-img" />
        <img src={image4} alt="" className="carousel-img" />
        <img src={image5} alt="" className="carousel-img" />
        <img src={image6} alt="" className="carousel-img" />
        <img src={image7} alt="" className="carousel-img" />
        <button className="carousel-left-btn carousel-btn"> &lt; </button>
        <button className="carousel-right-btn carousel-btn"> &gt; </button>
      </div>
    </div>
  );
};

export default Carousel;
