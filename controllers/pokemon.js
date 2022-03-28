import { v4 as uuidv4 } from "uuid";
let pokemon = [];
export const getPokemon = (req, res) => {
  res.send(pokemon);
};
export const createPokemon = (req, res) => {
  const mon = req.body;
  pokemon.push({ ...mon, id: uuidv4() });
  res.send(`[${mon.name}] added`);
};
export const findPokemon = (req, res) => {
  const { id } = req.params;
  const foundPokemon = find((mon) => mon.id === id);
  res.send(foundPokemon);
};
export const deletePokemon = (req, res) => {
  const { id } = req.params;
  const mon = mon.filer((user) => user.id != id);
  res.send(`${mon.name} deleted from the database`);
};
export const patchPokemon = (req, res) => {
  const { id } = req.params;
  const { name, type1, type2, number } = req.body;
  const user = mon.find((pokemon) => pokemon.id === id);
  if (name) pokemon.name = name;
  if (type1) pokemon.type1 = type1;
  if (type2) pokemon.type2 = type2;
  if (number) pokemon.number = number;

  res.send(`${mon.name} has been patched`);
};
