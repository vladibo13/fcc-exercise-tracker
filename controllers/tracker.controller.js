import asyncHandler from "../middlewares/async.middleware.js";
import Exercise from "../models/exercise.model.js";
import User from "../models/user.model.js";

export const trackerHandler = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { description, duration, date } = req.body;

  const user = await User.findOne({ _id: id });
  if (user) {
    const exercise = await Exercise.create({
      username: id,
      description,
      duration,
      date,
    });
    res.status(200).json(exercise);
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

export const userCreateHandler = asyncHandler(async (req, res) => {
  const { username } = req.body;

  const userExist = await User.findOne({ username });
  if (userExist) {
    res.status(400);
    throw new Error("username already exist");
  }

  const user = await User.create({
    username,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

export const userGetAllHandler = asyncHandler(async (req, res) => {
  const users = await User.find().select("-createdAt -updatedAt -__v");
  res.status(200).json(users);
});
