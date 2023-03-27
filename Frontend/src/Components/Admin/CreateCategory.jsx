import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../store/actions/categoryAction";
import { clearErrors } from "../../store/actions/userAction";
import { CREATE_CATEGORY_RESET } from "../../store/constants/categoryConstants";

const CreateCategory = () => {
  const { loading, error, success } = useSelector(
    (state) => state.createCategory
  );
  const [categoryname, setCategoryname] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Category Created Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: CREATE_CATEGORY_RESET });
    }
  }, [dispatch, error, success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", categoryname);
    dispatch(createCategory(myForm));
  };

  return (
    <div className='create_category'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter Category Name'
          name='categoryname'
          value={categoryname}
          onChange={(e) => setCategoryname(e.target.value)}
        />
        <button type='submit' className='primary_button'>
          Create Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
