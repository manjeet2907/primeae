import React from "react";
import { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const GridListBrand = ({ griddata }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6.8,
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
          slidesToScroll: 2,
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
    <div className='grid_list_brands'>
      <Slider ref={sliderRef} {...settings}>
        {griddata &&
          griddata.map((brand) => (
            <div key={brand._id} className='brand'>
              <img src={brand.image.url} alt='brandimage' />
            </div>
          ))}
      </Slider>
    </div>
  );
};
export default GridListBrand;

/**
 *   const [scrollLeft, setScrollLeft] = useState(0);
  const gridListRef = useRef(null);
  let interval = useRef(null);

  const handleScrollLeft = () => {
    const clientWidth = gridListRef.current.clientWidth;
    setScrollLeft(scrollLeft - clientWidth);
  };

  const handleScrollRight = () => {
    const clientWidth = gridListRef.current.clientWidth;
    setScrollLeft(scrollLeft + clientWidth);
  };

  const stopAutoScroll = () => {
    clearInterval(interval.current);
  };
  const startAutoScroll = () => {
    interval.current = setInterval(() => {
      setScrollLeft((scrollLeft) => scrollLeft - 150);
      if (
        scrollLeft <=
        -(gridListRef.current.scrollWidth - gridListRef.current.clientWidth)
      ) {
        stopAutoScroll();
      }
    }, 3000);
  };

  useEffect(() => {
    const gridList = gridListRef.current;

    gridList.addEventListener("mouseenter", stopAutoScroll);
    gridList.addEventListener("mouseleave", startAutoScroll);

    startAutoScroll();

    return () => {
      gridList.removeEventListener("mouseenter", stopAutoScroll);
      gridList.removeEventListener("mouseleave", startAutoScroll);
      clearInterval(interval.current);
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
        style={{ left: `${scrollLeft}px` }}>
        {griddata &&
          griddata.map((brand) => (
            <div key={brand._id} className='brand'>
              <img src={brand.image.url} alt='brandimage' />
            </div>
          ))}
      </div>
      <button className='buttonicon' onClick={handleScrollRight}>
        <BsFillArrowRightSquareFill />
      </button>
    </div>
  );
};
 */
