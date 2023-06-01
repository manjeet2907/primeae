import React, { lazy, Suspense, useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import ProductLoader from "../Client/ProductLoader";
const ProductPreviewMain = lazy(() => import("./ProductPreviewMain"));
// import ProductPreviewMain from "./ProductPreviewMain";

const GridList = ({ griddata }) => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 4.8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    className: "innerdivSlider",
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='grid_list'>
      <Slider ref={sliderRef} {...settings}>
        {griddata &&
          griddata.map((product) => (
            <Suspense key={product._id} fallback={<ProductLoader />}>
              <ProductPreviewMain product={product} />
            </Suspense>
          ))}
      </Slider>
    </div>
  );
};

export default GridList;
