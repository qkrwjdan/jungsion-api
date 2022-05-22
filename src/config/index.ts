import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (process.env.NODE_ENV === "local" && envFound.error ) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT as string, 10) as number || 5000,

  /**
   * MongoDB URI
   */
  mongoURI: process.env.MONGODB_URI as string,
};