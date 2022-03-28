import express from "express";
import {
  getPokemon,
  createPokemon,
  findPokemon,
  deletePokemon,
  patchPokemon,
} from "../controllers/pokemon.js";

const router = express.Router();

router.get("/", getPokemon);
router.post("/", createPokemon);
router.get("/:id", findPokemon);
router.delete("/:id", deletePokemon);
router.patch("/:id", patchPokemon);
export default router;
