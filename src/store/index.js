import { configureStore } from "@reduxjs/toolkit";
import favPokemonReducer from "../slice/FavPokemonSlice";

const store = configureStore({
  reducer: {
    favPokemon: favPokemonReducer,
  },
});

export default store;
