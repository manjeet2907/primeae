import React from "react";

const ProductPreview = (product) => {
  const { imageUrl, name, price } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='productfooter'>
        <span className='name'>{name}</span>
        <span className='price'>$ {price}</span>
      </div>
    </div>
  );
};

export default ProductPreview;
