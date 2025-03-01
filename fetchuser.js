require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const User = require("../models/User");

const getUsers = async () => {
  await connectDB();
  try {
    const users = await User.find();
    console.log("All Users:", users);
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    mongoose.connection.close();
  }
};

getUsers();
