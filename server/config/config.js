import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 5001;
export const NODE_ENV = process.env.NODE_ENV;

export const CONNECTION_STRING = process.env.MONGO_URI;

export const JWT_SECRET = process.env.JWT_SECRET;
