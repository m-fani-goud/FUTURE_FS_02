import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* Root Route */
app.get("/", (req, res) => {
  res.send("Dawath Biryani API is running 🚀");
});

/* API Routes */
app.use("/api/contact", contactRoutes);

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

/* Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});