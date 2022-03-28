import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";
import PostPokemon from "../models/pokemon";
export const getPokemon = async (req, res) => {
  try {
    const postPokemon = await PostPokemon.find();
    res.status(200).json(postPokemon);
  } catch (error) {
    res.status(404).json(error)
  }
};
export const createPokemon = (req, res) => {
  const mon = req.body;
  const newPostPokemon = new PostPokemon({
    ...mon, 
    id: uuidv4(), 
  })
  try {
    await newPostPokemon.save()
    res.status(201).json(newPostPokemon)
  } catch (error) {
    res.status(409).json(error)
  }
};
export const findPokemon = async (req, res) => {
  const { id } = req.params;
  try {
    const mon = await PostPokemon.findById(id);
    res.staut(200).json(mon)
  } catch (error) {
    res.status(404).json(error)
  }
};
export const deletePokemon = (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
  return res.status(404).send(`No pokemon with id: ${id}`);

await PostPokemon.findByIdAndRemove(id);

res.json({ message: "Pokemon deleted successfully." });
};
export const patchPokemon = (req, res) => {
  const { id } = req.params;
  const { name, type1, type2, number, description, type } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No pokemon with id: ${id}`);

  const updatedPokemon = { name, type1, type2, description, type, number, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPokemon, { new: true });

  res.json(updatedPokemon);
};
