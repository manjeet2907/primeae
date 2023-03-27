import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  Stock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  isNewProduct: {
    type: Boolean,
    default: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  isPrime: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  brand: {
    type: mongoose.Schema.ObjectId,
    ref: "Brand",
    required: [true, "Please Select a Brand"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: [true, "Please Select a Category"],
  },
  // specification: [
  //   {
  //     name: {
  //       type: String,
  //     },
  //     value: {
  //       type: String,
  //     },
  //   },
  // ],
  // descriptionBlock: [
  //   {
  //     blockName: {
  //       type: String,
  //     },
  //     descriptiondetails: [
  //       {
  //         blockimage: {
  //           public_id: {
  //             type: String,
  //             required: true,
  //           },
  //           url: {
  //             type: String,
  //             required: true,
  //           },
  //         },
  //         descriptiondetails1: {
  //           details: {
  //             type: String,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // ],
});

export default mongoose.model("Product", productSchema);
