const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field is required"],
    },
    email: {
      type: String,
      required: [true, "This field is required"],
    },
    phone: {
      type: Number,
      required: [true, "This field is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
