const mongoose = require("mongoose");

const uri = process.env.ATLAS_URI;

const conn = () => {
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connection established..."))
    .catch((error) =>
      console.error("MongoDB connection failed:", error.message)
    );
};

module.exports = conn;
