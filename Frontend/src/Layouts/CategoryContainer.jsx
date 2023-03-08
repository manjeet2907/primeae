import React from "react";
import { ProductSection } from "../Components/Products";
import CategoryData from "../data/CategoryData";

const CategoryContainer = () => {
  return (
    <div className='categories_container'>
      {CategoryData.map((category) => (
        <ProductSection key={category.id} title={category.categoryName} />
      ))}
    </div>
  );
};

export default CategoryContainer;
