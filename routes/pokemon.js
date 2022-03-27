import express from "express";
import {
  getPokemon,
  createPokemon,
  findPokemon,
  deletePokemon,
} from "../controllers/pokemon.js";

const router = express.Router();

router.get("/", getPokemon);
router.post("/", createPokemon);
router.get("/:id", findPokemon);
router.delete("/:id", deletePokemon);
export default router;
