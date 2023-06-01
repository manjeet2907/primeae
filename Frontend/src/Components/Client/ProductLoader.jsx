import React from "react";

const ProductLoader = () => {
  return (
    <div className='productCardmain_excerpt'>
      <div className='img_animate_excerpt' />
      <div className='productfootermain_excerpt'>
        <p className='text_excerpt'></p>
        <span className='text_excerpt'></span>
        <span className='productCardSpanmain_excerpt'></span>
      </div>
    </div>
  );
};

export default ProductLoader;

/**
 * <Link className='productCardmain' to={`/product/${product._id}`}>
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
 */
