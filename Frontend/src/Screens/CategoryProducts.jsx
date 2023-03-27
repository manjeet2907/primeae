import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Loader, ProductPreview } from "../Components/Client";
import { MainContainer, MetaData, Sidebar } from "../Layouts";
import { clearErrors, getProduct } from "../store/actions/productAction";
import { getCategory } from "../store/actions/categoryAction";
import Slider from "@mui/material/Slider";
import Pagination from "@mui/material/Pagination";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { error: categoryError, category } = useSelector(
    (state) => state.getCategory
  );
  const { brands } = useSelector((state) => state.allBrands);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [brand, setBrand] = useState("");
  const [ratings, setRatings] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (categoryError) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getCategory(id));
  }, [dispatch, id]);

  const keyword = "";

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  let count = filteredProductsCount;
  const Category = category._id;
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, Category, ratings));
  }, [dispatch, keyword, currentPage, price, Category, ratings, error]);

  return (
    <>
      <MetaData title={category.name} />
      <div className='two_grid_layout'>
        <Sidebar>
          <div className='filterbox'>
            <p>Categories:</p>
            <ul className='filterbox_categorybox'>
              <p className='selectedcategory'>{category.name}</p>
            </ul>
            <p>Brands:</p>
            <ul className='filterbox_categorybox'>
              {brands.map((brand) => (
                <li
                  className='filterbox_category'
                  key={brand._id}
                  onClick={() => setBrand(brand._id)}>
                  {brand.name}
                </li>
              ))}
            </ul>
            <p>Price</p>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay='auto'
              aria-labelledby='range-slider'
              min={0}
              max={10000}
              step={500}
              marks
            />
            <fieldset>
              <p component='legend'>Ratings Above</p>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby='continuous-slider'
                valueLabelDisplay='auto'
                min={0}
                max={5}
                step={1}
                marks
              />
            </fieldset>
          </div>
        </Sidebar>
        <MainContainer title={category.name} productlength={products.length}>
          <div className='allProductsContainer'>
            {loading && <Loader />}
            {products &&
              products.map((product) => (
                <ProductPreview key={product._id} product={product} />
              ))}
          </div>
          {resultPerPage < count && (
            <div className='paginationBox'>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText='Next'
                prevPageText='Prev'
                firstPageText='1st'
                lastPageText='Last'
                itemClass='page-item'
                linkClass='page-link'
                activeClass='pageItemActive'
                activeLinkClass='pageLinkActive'
              />
            </div>
          )}
        </MainContainer>
      </div>
    </>
  );
};

export default CategoryProducts;
