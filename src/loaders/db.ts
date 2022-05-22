import mongoose from "mongoose";
import config from "../config";
import Document from "../models/Document";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set("autoCreate", true);

    console.log("Mongoose Connected ...");

    Document.createCollection().then(function (collection) {
      console.log("Document Collection is created!");
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
