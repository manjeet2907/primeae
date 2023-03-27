import React from "react";
import { Link } from "react-router-dom";

const ProductPreview = ({ product }) => {
  return (
    <>
      <Link className='productCard' to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <div className='productfooter'>
          <div>{/* <Rating {...options} />{" "} */}</div>
          {product.name.length >= 60 ? (
            <p>{product.name.substring(0, 50)}...</p>
          ) : (
            <p>{product.name}</p>
          )}
          <span>AED{product.price}</span>
          <span className='productCardSpan'>
            ({product.numOfReviews} Reviews)
          </span>
        </div>
      </Link>
    </>
  );
};

export default ProductPreview;
