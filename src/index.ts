import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users"

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

(async () => {
  try {
    // await mongoose.connect("mongodb://my_mongodb/test_db");
    const MONGO_URI=process.env.MONGO_URI || "mongodb://localhost:27017/test_db";
    await mongoose.connect(MONGO_URI);
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    })
  }
  catch (err: any) {
    console.log(err.message);
  }
})()

app.get("/", (req, res) => {
  res.send("ssss ");
})
app.get("/check", (req, res) => {
  res.send("New checkkkkk");
})
app.use("/users", userRouter)




