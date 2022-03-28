import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  type1: String,
  type2: String,
  description: String,
  number: Number,
});

var PostPokemon = mongoose.model("PostPokemon", postSchema);
export default PostPokemon;
