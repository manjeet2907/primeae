import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductPreviewMain = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <>
      <Link className='productCardmain' to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name} />
        <div className='productfootermain'>
          <div>
            <Rating {...options} />{" "}
          </div>
          {product.name.length >= 40 ? (
            <p>{product.name.substring(0, 40)}...</p>
          ) : (
            <p>{product.name}</p>
          )}
          <span>AED-{product.price}</span>
          <span className='productCardSpanmain'>
            ({product.numOfReviews} Reviews)
          </span>
        </div>
      </Link>
    </>
  );
};

export default ProductPreviewMain;
