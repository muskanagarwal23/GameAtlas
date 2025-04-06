import React from "react";
import Carousel from "react-bootstrap/Carousel";
import MainBanner from "../assets/Images/MainBanner.png";
import Banner2 from "../assets/Images/Banner2.png";
import banner3 from "../assets/Images/banner3.png";

function CarouselCards() {
  return (
    <div className="carousel-wrapper mx-auto my-4">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img src={MainBanner} className="d-block w-100 carousel-image" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={Banner2} className="d-block w-100 carousel-image" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={banner3} className="d-block w-100 carousel-image" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselCards;
