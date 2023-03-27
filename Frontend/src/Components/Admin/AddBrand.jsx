import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputData } from "../Client";
import { useDispatch } from "react-redux";
import { createBrand } from "../../store/actions/brandAction";
import { toast } from "react-hot-toast";

const AddBrand = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imagesPreview, setImagesPreview] = useState("");

  const createBrandImagesChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagesPreview(reader.result);
        setImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const createBrandSubmitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("image", image);

    dispatch(createBrand(myForm));
    setName("");
    setImage("");
    setImagesPreview("");
    toast.success("Brand Created Successfully");
  };

  return (
    <>
      <h3>Create Brand</h3>

      <div className='brand_management'>
        <form
          className='createBrand'
          encType='multipart/form-data'
          onSubmit={createBrandSubmitHandler}>
          <InputData
            value={name}
            label='Enter Brand Name'
            placeholder='Enter Brand Name'
            required
            type='text'
            actionOnChange={(e) => setName(e.target.value)}
            name='name'
          />
          <input
            type='file'
            name='image'
            accept='image/*'
            onChange={createBrandImagesChange}
          />
          <div id='createBrandFormImage'>
            {imagesPreview && <img src={imagesPreview} alt='Brand Preview' />}
          </div>
          <button className='primary_button' id='createBrandBtn' type='submit'>
            Create Brand
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBrand;
