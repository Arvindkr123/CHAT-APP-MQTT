import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve("./src/.env"); // Resolve the full path to the .env file inside src
// console.log(`Loading environment variables from: ${envPath}`);

dotenv.config({
  path: envPath, // Provide the exact path to the .env file
});

export const { PORT, MONGODB_URI, JWT_SECRET } = process.env;
