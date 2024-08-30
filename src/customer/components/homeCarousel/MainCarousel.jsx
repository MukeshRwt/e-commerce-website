import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

const items = MainCarouselData.map((item) => {
  // const navigate =
  return (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt=""
    />
  );
});

const Carousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    controlsStrategy="alternate"
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000}
    infinite
  />
);
export default Carousel;
