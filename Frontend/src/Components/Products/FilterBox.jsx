import React, { useState } from "react";
import { useSelector } from "react-redux";
import RangeSlider from "./RangeSlider";

const FilterBox = () => {
  const { categories } = useSelector((state) => state.allCategories);
  const { brands } = useSelector((state) => state.allBrands);

  const handleonchange = () => {};
  return (
    <div>
      <div className='filter_box'>
        <div className='filterbox_heading'>
          <h2>Filter Records</h2>
          <button>Clear all</button>
        </div>
        <div className='filtersection'>
          <label htmlFor='category-select'>Category:</label>
          <select id='category-select'>
            {categories &&
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
        <div className='filtersection'>
          <label htmlFor='brand-select'>Brand:</label>
          <select id='brand-select'>
            {brands &&
              brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
          </select>
        </div>
        <div className='filtersection'>
          <label htmlFor='price-range'>Price Range:</label>
          <RangeSlider
            min={0}
            max={500000}
            value={[0, 500000]}
            onChange={handleonchange}
          />
        </div>
        <div className='filtersection'>
          <label htmlFor='ratings-range'>Ratings:</label>
          <RangeSlider
            min={0}
            max={5}
            value={[0, 5]}
            onChange={handleonchange}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
