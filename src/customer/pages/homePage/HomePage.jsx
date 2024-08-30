import React from "react";
import Carousel from "../../components/homeCarousel/MainCarousel";
import HomeSectionCerousel from "../../components/HomeSectionCerousel/HomeSectionCerousel";
import { mens_Kurta } from "../../../data/Mens_Kurta";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <div className=" space-y-10 py-20  flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCerousel data={mens_Kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCerousel data={mens_Kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCerousel data={mens_Kurta} sectionName={"Mens Shoes"} />
        <HomeSectionCerousel data={mens_Kurta} sectionName={"Women's Saree"} />
        <HomeSectionCerousel data={mens_Kurta} sectionName={"Women's Dress"} />
      </div>
    </>
  );
};

export default HomePage;
