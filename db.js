const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://mtudorache:at9DlwAhTTTERm6H@brewshare.f8j8ymd.mongodb.net/?retryWrites=true&w=majority";

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
