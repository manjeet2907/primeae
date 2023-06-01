import React, { useEffect, useState, lazy, Suspense } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allBrands } from "../../store/actions/brandAction";
import { clearErrors, getProduct } from "../../store/actions/productAction";

const GridList = lazy(() => import("../Products/GridList"));
const GridListBrand = lazy(() => import("./GridListBrands"));

const CategoryContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, error, filteredProductsCount } = useSelector(
    (state) => state.products
  );
  const { brands } = useSelector((state) => state.allBrands);

  // fetching all categories
  useEffect(() => {
    dispatch(allBrands());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const keyword = "";

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, error]);

  const onclickProducthandler = () => {
    navigate("/allproducts");
  };
  const onclickBrandhandler = () => {
    navigate("/shopbybrand");
  };

  const filteredNewProducts = products?.filter(
    (product) => product.isNewProduct
  );
  const filteredFeaturedProducts = products?.filter(
    (product) => product.isFeatured
  );
  const filteredPrimeProducts = products?.filter((product) => product.isPrime);
  return (
    <>
      <div className='new_categories_container'>
        <div className='productSection'>
          <div className='productSection_heading'>
            <div className='productSection_heading_name'>
              <p>New Products</p>
            </div>
            <p onClick={onclickProducthandler}></p>
          </div>
          <div className='productSection_productlist'>
            <Suspense fallback={<div className='loadText'></div>}>
              <GridList griddata={filteredNewProducts} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className='featured_categories_container'>
        <div className='productSection'>
          <div className='productSection_heading'>
            <div className='productSection_heading_name'>
              <p>Featured Products</p>
            </div>
            <p onClick={onclickProducthandler}></p>
          </div>
          <div className='productSection_productlist'>
            <Suspense fallback={<div className='loadText'></div>}>
              <GridList griddata={filteredFeaturedProducts} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className='prime_categories_container'>
        <div className='productSection'>
          <div className='productSection_heading'>
            <div className='productSection_heading_name'>
              <p>Our Prime Products</p>
            </div>
            <p onClick={onclickProducthandler}></p>
          </div>
          <div className='productSection_productlist'>
            <Suspense fallback={<div className='loadText'></div>}>
              <GridList griddata={filteredPrimeProducts} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className='brand_categories_container'>
        <div className='productSection'>
          <div className='productSection_heading'>
            <div className='productSection_heading_name'>
              <p>Brands We Deal In</p>
            </div>
            <div className='exploretab' onClick={onclickBrandhandler}></div>
          </div>
          <div className='productSection_productlist'>
            <GridListBrand griddata={brands} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryContainer;

/* {products.map((product) => {
                if (
                  product.isNewProduct &&
                  category.categoryName === "New Products"
                ) {
                  filtereddata.push(product);
                } else if (
                  product.isPrime &&
                  category.categoryName === "Our Prime Products"
                ) {
                  filtereddata.push(product);
                } else if (
                  product.isFeatured &&
                  category.categoryName === "Featured Products"
                ) {
                  filtereddata.push(product);
                }
                return filtereddata;
              })} */
