import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pokemonRoutes from "./routes/pokemon.js";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/pokemon", pokemonRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = 5002;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
