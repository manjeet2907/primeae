import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MetaData } from "../../Layouts";
import { allBrands } from "../../store/actions/brandAction";
import MyAccordian from "../Client/Accordian";
import AddBrand from "./AddBrand";

const Brand = () => {
  const { brands } = useSelector((state) => state.allBrands);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const handleaddClick = () => {
  //   navigate("/brand");
  // };
  // fetching all categories
  useEffect(() => {
    dispatch(allBrands());
  }, [dispatch]);
  return (
    <>
      <MetaData title='Brands-Admin' />
      <h3>Brands Management</h3>
      <div className='brandsPage'>
        <div className='brands_add'>
          {/* <button onClick={handleaddClick}>Add New Brand</button> */}
          <MyAccordian question={"Add New Brand"} answer={<AddBrand />} />
        </div>
        <div className='allBrands'>
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

export default Brand;
