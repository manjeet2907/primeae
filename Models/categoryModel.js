import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter a Category name"],
  },
});

export default mongoose.model("Category", categorySchema);
