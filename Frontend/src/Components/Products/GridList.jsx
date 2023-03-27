import React, { useEffect, useRef, useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import ProductPreviewMain from "./ProductPreviewMain";

const GridList = ({ griddata }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const gridListRef = useRef(null);

  const handleScrollLeft = () => {
    setScrollLeft(scrollLeft - 150);
  };

  const handleScrollRight = () => {
    setScrollLeft(scrollLeft + 150);
  };

  useEffect(() => {
    const gridList = gridListRef.current;
    let interval = null;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        setScrollLeft((scrollLeft) => scrollLeft - 150);
      }, 3000);
    };

    const stopAutoScroll = () => {
      clearInterval(interval);
    };

    gridList.addEventListener("mouseenter", stopAutoScroll);
    gridList.addEventListener("mouseleave", startAutoScroll);

    startAutoScroll();

    return () => {
      gridList.removeEventListener("mouseenter", stopAutoScroll);
      gridList.removeEventListener("mouseleave", startAutoScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='grid_list'>
      <button className='buttonicon' onClick={handleScrollLeft}>
        <BsFillArrowLeftSquareFill />
      </button>

      <div
        className='productlist snaps-inline'
        ref={gridListRef}
        style={{ Left: `${scrollLeft}px` }}>
        {griddata &&
          griddata.map((product) => (
            <ProductPreviewMain key={product._id} product={product} />
          ))}
      </div>

      <button className='buttonicon' onClick={handleScrollRight}>
        <BsFillArrowRightSquareFill />
      </button>
    </div>
  );
};

export default GridList;
