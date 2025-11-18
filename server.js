import express from "express"
import router from "./routes/expenses.routes.js";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv"
dotenv.config();

const app = express();


const PORT  = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use("/api/expenses",router);




connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
