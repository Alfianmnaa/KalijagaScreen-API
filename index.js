const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const watchRoutes = require("./src/routes/movies");
const authRoutes = require("./src/routes/auth");
const userRoutes = require("./src/routes/user");
const favoriteRoutes = require("./src/routes/favorite");

dotenv.config();
app.use(bodyParser.json());
app.use(express.json());
// allow access
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

// Handle Error mongodb
mongoose.set("strictQuery", false);
// Connect mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to mongoose"))
  .catch((err) => console.log(err));

// menggunakan grouping
app.use("/watch", watchRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/favorite", favoriteRoutes);
// start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Backend movie is running in port " + PORT);
});
