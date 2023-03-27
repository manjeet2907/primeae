import express from "express";

import {
  deleteBrand,
  createBrand,
  getBrands,
  getBrand,
} from "../Controllers/brandController.js";

import {
  isAuthenticatedUser,
  authorizeRoles,
} from "../middlewares/authentication.js";

const router = express.Router();

router.route("/brands").get(getBrands);

router.get("brand/:id", getBrand);

router
  .route("/admin/brand/new")
  .post(isAuthenticatedUser, authorizeRoles("admin", createBrand));

router
  .route("/admin/brand/:id")
  .post(isAuthenticatedUser, authorizeRoles("admin", deleteBrand));

export default router;
