require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const User = require("./models/User");

const addUser = async () => {
  await connectDB();
  const newUser = new User({
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
  });

  try {
    const savedUser = await newUser.save();
    console.log("User Added:", savedUser);
  } catch (error) {
    console.error("Error inserting user:", error);
  } finally {
    mongoose.connection.close();
  }
};

addUser();
