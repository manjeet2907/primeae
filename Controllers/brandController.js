import Brand from "../Models/brandModel.js";
import cloudinary from "cloudinary";
import asyncHandler from "express-async-handler";
import validateMongoDbId from "../utils/validateMongoID.js";

//@description     Create a Brand -- Admin
//@route           POST /api/vi/admin/brand/addnew
//@access          private-admin

const createBrand = asyncHandler(async (req, res, next) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
    folder: "brands",
    crop: "scale",
  });

  const { name } = req.body;

  const brand = await Brand.create({
    name,
    image: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  res.status(201).json({
    success: true,
    brand,
  });
});

//@description      Get all Brands
//@route           Get /api/vi/admin/brands
//@access          Public-admin

const getBrands = asyncHandler(async (req, res, next) => {
  const brands = await Brand.find();
  res.status(200).json({
    success: true,
    brands,
  });
});

//@description      Delete Brand
//@route           DELETE /api/vi/admin/brand/:id
//@access          private-admin

const deleteBrand = asyncHandler(async (req, res, next) => {
  const brand = await Brand.findById(req.params.id);

  if (!brand) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Deleting Images From Cloudinary
  for (let i = 0; i < brand.images.length; i++) {
    await cloudinary.v2.uploader.destroy(brand.images[i].public_id);
  }

  await brand.remove();

  res.status(200).json({
    success: true,
    message: "brand Delete Successfully",
  });
});

//@description      Get Brand Details
//@route          get /api/vi/brand/:id
//@access          public
const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params.id;
  validateMongoDbId(id);
  const brand = await Brand.findById(id);
  res.status(200).json({
    success: true,
    brand,
  });
});

export { deleteBrand, createBrand, getBrands, getBrand };
