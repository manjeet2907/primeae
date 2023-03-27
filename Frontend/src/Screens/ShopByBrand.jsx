import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeroImage } from "../Components/Client";
import { MetaData } from "../Layouts";
import { allBrands } from "../store/actions/brandAction";

const ShopByBrand = () => {
  const { brands } = useSelector((state) => state.allBrands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allBrands());
  }, [dispatch]);
  return (
    <>
      <MetaData title='Shop By Brands' />
      <HeroImage />
      <div className='shopbybrandpage'>
        <h3>Brands we deal in</h3>
        <div className='allBrandsDisplay'>
          {brands &&
            brands.map((brand) => (
              <div key={brand._id} className='brand'>
                <img src={brand.image.url} alt='brandimage' />
                <p>{brand.name}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ShopByBrand;
