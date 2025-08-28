import express from "express";
import { config } from "dotenv";
import path from "path";

const app = express();
config();

// Constants
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

// Static App
app.use(express.static(path.join(path.resolve(__dirname, ".."), "public")));

// Middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route
app.get("/segmite-membership-form", (req, res) => {
  console.log(__dirname);
  res.render("membership_form");
});

app.listen(PORT, () => console.log(`🟢 Server is running on PORT:${PORT}`));
