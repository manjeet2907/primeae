import express from "express";

import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getCategory,
} from "../Controllers/categoryController.js";

import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../middlewares/authentication.js";

const router = express.Router();

router.route("/getcategories").get(getAllCategories);

router.route("/getcategory/:id").get(getCategory);

router
  .route("/admin/category/addnew")
  .post(isAuthenticatedUser, authorizeRoles("admin", createCategory));

router
  .route("/admin/category/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin", updateCategory));

export default router;
