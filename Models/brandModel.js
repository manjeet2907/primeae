import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter a Brand name"],
    unique: true,
    index: true,
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.model("Brand", brandSchema);
