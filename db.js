const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://mihaitudorachebusiness:ETE5WA2Uh2I1nqNw@cluster0.gedsktn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectDB;
