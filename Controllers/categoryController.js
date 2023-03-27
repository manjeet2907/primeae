import Category from "../Models/categoryModel.js";
import asyncHandler from "express-async-handler";
import ErrorHandler from "../utils/errorHandling.js";

//@description     Create a Category -- Admin
//@route           POST /api/vi/admin/category/addnew
//@access          private-admin
const createCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);

  res.status(201).json({
    success: true,
    category,
  });
});

//@description     Get all Categories
//@route           POST /api/vi/getcategories/
//@access          private-admin

const getAllCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({
    success: true,
    categories,
  });
});

//@description     Get a category detail
//@route           PUT /api/vi/updatecategory/
//@access          public
const getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(new ErrorHandler("Category Not Found", 404));
  }
  res.status(200).json({
    success: true,
    category,
  });
});
//@description     update a category
//@route           PUT /api/vi/admin/updatecategory/
//@access          private-admin
const updateCategory = asyncHandler(async (req, res) => {
  const updatedCategory = {
    name: req.body.name,
  };
  await Category.findByIdAndUpdate(req.params.id, updatedCategory);

  res.status(200).json({
    success: true,
  });
});
//@description     delete a category
//@route           PUT /api/vi/admin/updatecategory/
//@access          private-admin
const deleteCategory = asyncHandler(async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
  });
});

export {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getCategory,
};
