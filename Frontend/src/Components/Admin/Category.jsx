import React, { useEffect } from "react";
import { MetaData } from "../../Layouts";
import CreateTable from "./CreateTable";
import { useDispatch, useSelector } from "react-redux";

import { AiFillDelete } from "react-icons/ai";
import MyAccordian from "../Client/Accordian";
import CreateCategory from "./CreateCategory";
import { allCategories } from "../../store/actions/categoryAction";

const headers = ["id", "Category name", "Created By", "Edit", "Delete"];

const Category = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.allCategories);
  useEffect(() => {
    dispatch(allCategories());
  }, [dispatch]);
  const TableData = [];

  const deleteCategoryHandler = (id) => {};
  return (
    <>
      <MetaData title='Category-Admin' />
      <h3>Categories Management</h3>
      <div className='category_admin'>
        <div className='addCategory'>
          <MyAccordian
            question={"Add New Category"}
            answer={<CreateCategory />}
          />
        </div>
        <div className='categoriesList'>
          {categories &&
            categories.map((category) =>
              TableData.push({
                id: category._id,
                "Category name": category.name,
                "Created By": "admin",
                Delete: (
                  <button onClick={() => deleteCategoryHandler(category._id)}>
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

export default Category;
