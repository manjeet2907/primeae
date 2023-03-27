import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter a Category name"],
    unique: true,
    index: true,
  },
});

export default mongoose.model("Category", categorySchema);
