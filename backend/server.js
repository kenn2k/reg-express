import express from "express";
import router from "./routes/auth.js";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connect.js";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());

app.use("/api/auth", router);

// app.get("/", (req, res) => {
//   res.send("Hello!");
// });

app.listen(PORT, () => {
  connectToMongoDb();
  console.log("server OK");
});
