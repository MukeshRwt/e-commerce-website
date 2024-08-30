import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import { KeyboardArrowLeft } from "@mui/icons-material";

const HomeSectionCerousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800">{sectionName}</h2>
      <div className="relative px-4 lg:px-8">
        <div>
          <AliceCarousel
            className="relative p-5"
            responsive={responsive}
            //   mouseTracking
            items={items}
            //   controlsStrategy="alternate"
            disableButtonsControls
            onSlideChange={setActiveIndex}
            activeIndex={activeIndex}
          />
          {activeIndex != items.length - 5 && (
            <Button
              variant="contained"
              className="z-50 "
              sx={{
                position: "absolute",
                top: "8rem",
                right: "0rem",
                transform: "translateX(50%) rotate(90deg)",
                bgcolor: "white",
              }}
              onClick={slideNext}
              aria-label="next"
            >
              <KeyboardArrowLeft
                sx={{
                  transform: "rotate(90deg)",
                  color: "black",
                }}
              />
            </Button>
          )}

          {activeIndex != 0 && (
            <Button
              variant="contained"
              className="z-50 "
              sx={{
                position: "absolute",
                top: "8rem",
                left: "0rem",
                transform: "translateX(-50%) rotate(90deg)",
                bgcolor: "white",
              }}
              onClick={slidePrev}
              aria-label="next"
            >
              <KeyboardArrowLeft
                sx={{
                  transform: "rotate(-90deg)",
                  color: "black",
                }}
              />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCerousel;
