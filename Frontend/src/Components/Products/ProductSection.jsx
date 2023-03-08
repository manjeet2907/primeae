import React from "react";
import SHOP_DATA from "../../data/SHOP_DATA";
import ProductPreview from "./ProductPreview";

const ProductSection = ({ title }) => {
  return (
    <div className='productSection'>
      <div className='productSection_heading'>
        <div className='productSection_heading_name'>
          <p>{title}</p>
        </div>
        <p>View All</p>
      </div>
      <div className='productSection_productlist'>
        <div className='product'>
          {SHOP_DATA.map((product) => (
            <ProductPreview key={product.title} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
