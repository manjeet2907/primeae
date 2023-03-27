import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const GridListBrand = ({ griddata }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const gridListRef = useRef(null);

  const handleScrollLeft = () => {
    const clientWidth = gridListRef.current.clientWidth;
    setScrollLeft(scrollLeft - clientWidth);
  };

  const handleScrollRight = () => {
    const clientWidth = gridListRef.current.clientWidth;
    setScrollLeft(scrollLeft + clientWidth);
  };

  useEffect(() => {
    const gridList = gridListRef.current;
    let interval = null;

    const stopAutoScroll = () => {
      clearInterval(interval);
    };
    const startAutoScroll = () => {
      interval = setInterval(() => {
        setScrollLeft((scrollLeft) => scrollLeft - 150);
        if (scrollLeft <= -(gridList.scrollWidth - gridList.clientWidth)) {
          stopAutoScroll();
        }
      }, 3000);
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
    <div className='grid_list_brands'>
      <button className='buttonicon' onClick={handleScrollLeft}>
        <BsFillArrowLeftSquareFill />
      </button>
      <div
        className='productlist snaps-inline'
        ref={gridListRef}
        style={{ Left: `${scrollLeft}px` }}>
        {griddata &&
          griddata.map((brand) => (
            <div key={brand._id} className='brand'>
              <img src={brand.image.url} alt='brandimage' />
              {/* <p>{brand.name}</p> */}
            </div>
          ))}
      </div>
      <button className='buttonicon' onClick={handleScrollRight}>
        <BsFillArrowRightSquareFill />
      </button>
    </div>
  );
};

export default GridListBrand;
