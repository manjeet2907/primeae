import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillFileAdd, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MetaData } from "../../Layouts";
import CreateTable from "./CreateTable";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  deleteProduct,
  getAdminProduct,
} from "../../store/actions/productAction";
import { DELETE_PRODUCT_RESET } from "../../store/constants/productConstants";
import { toast } from "react-hot-toast";

const headers = [
  "serialNo",
  "ProductId",
  "Stock",
  "price",
  "Edit",
  "Delete",
  "Product_Name",
];

const ProductList = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { error, products } = useSelector((state) => state.products);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );
  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const navigate = useNavigate();
  const handleClick_addProduct = () => {
    navigate("/product");
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Product Deleted Successfully");
      navigate("/admin");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, error, deleteError, isDeleted, navigate]);
  const TableData = [];

  return (
    <>
      <MetaData title='Products- Admin' />
      <h3>Products Management</h3>
      <div className='productsPage'>
        <div className='productsPage_addProduct'>
          <button className='primary_button' onClick={handleClick_addProduct}>
            <span className='reacticons_admin'>
              <AiFillFileAdd />
            </span>
            Add New Product
          </button>
        </div>
        <div className='productpage_filterProduct'>
          {products &&
            products.map((product) =>
              TableData.push({
                ProductId: product._id,
                Stock: product.Stock,
                price: product.price,
                Product_Name: <p>{product.name.substring(0, 50)}...</p>,

                Edit: (
                  <Link
                    to={`/admin/product/${product._id}`}
                    className='reacticons_admin'>
                    <AiFillEdit />
                  </Link>
                ),
                Delete: (
                  <button
                    className='reacticons_admin'
                    onClick={() => deleteProductHandler(product._id)}>
                    <AiFillDelete />
                  </button>
                ),
              })
            )}
          <CreateTable headers={headers} data={TableData} />
        </div>
      </div>
    </>
  );
};

export default ProductList;
