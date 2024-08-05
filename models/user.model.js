import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    duration: {
      type: Number,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
      unique: true,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default UrlShortner;
