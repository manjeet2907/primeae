import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MetaData } from "../../Layouts";
import { InputData } from "../Client";
import { NEW_PRODUCT_RESET } from "../../store/constants/productConstants";
import { clearErrors, createProduct } from "../../store/actions/productAction";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const defaultFormFields = {
  name: "",
  price: 0,
  description: "",
  Stock: 0,
};

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.allCategories);
  const { brands } = useSelector((state) => state.allBrands);

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [formFields, setFormFields] = useState(defaultFormFields);
  // destrcture the input fields from form fields
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [isNewProduct, setIsNewProduct] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isPrime, setIsPrime] = useState(false);

  const { name, price, description, Stock } = formFields;

  // const categories = ["Mobile", "Laptop", "Accessories"];

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("price", price);
    myForm.set("Stock", Stock);
    myForm.set("isNewProduct", isNewProduct);
    myForm.set("isFeatured", isFeatured);
    myForm.set("isPrime", isPrime);

    myForm.set("category", category);
    myForm.set("brand", brand);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Product Created Successfully");
      navigate("/admin");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, navigate, success]);
  // console.log(categories);
  return (
    <>
      <MetaData title='Create Product' />
      <h3>Create Product</h3>
      <div className='addProduct'>
        <form
          className='createProductForm'
          encType='multipart/form-data'
          onSubmit={createProductSubmitHandler}>
          <div className='selectboxes'>
            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option>Choose Brand</option>
              {brands.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              ))}
            </select>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option>Choose Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className='checkboxes'>
            <label>
              <input
                type='checkbox'
                checked={isNewProduct}
                onChange={(e) => setIsNewProduct(e.target.checked)}
              />
              {/* {console.log(isNew)} */}
              <p>Is New Product</p>
            </label>
            <label>
              <input
                type='checkbox'
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
              />
              <p>Is Featured Product</p>
            </label>
            <label>
              <input
                type='checkbox'
                checked={isPrime}
                onChange={(e) => setIsPrime(e.target.checked)}
              />
              <p>Is Prime Product</p>
            </label>
          </div>
          <div className='basicDetails'>
            <InputData
              value={name}
              label='Enter Product Name'
              placeholder='Enter Product Name'
              required
              type='text'
              actionOnChange={handleChange}
              name='name'
            />
            <InputData
              value={price}
              label='Enter Price'
              placeholder='Price'
              required
              type='text'
              actionOnChange={handleChange}
              name='price'
            />
            <textarea
              className='textarea'
              value={description}
              placeholder='Enter Product Description'
              required
              onChange={handleChange}
              rows='10'
              cols='60'
              name='description'
            />
          </div>

          <div className='stockUpdate'>
            <InputData
              value={Stock}
              label='Stock'
              placeholder='Stock'
              required
              type='number'
              actionOnChange={handleChange}
              name='Stock'
            />
          </div>
          <div className='productImageUpload'>
            <input
              type='file'
              name='avatar'
              accept='image/*'
              onChange={createProductImagesChange}
              multiple
            />
            <div id='createProductFormImage'>
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt='Product Preview' />
              ))}
            </div>
          </div>
          <div className='actions'>
            <button
              className='primary_button'
              id='createProductBtn'
              type='submit'
              disabled={loading ? true : false}>
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewProduct;
