import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: ["Hello"],
};

const favPokemonSlice = createSlice({
  name: "favPokemon",
  initialState,
  reducers: {
    addFavPokemon: (state, action) => {
      // console.log(state);
      // console.log(action);
      state.data.push(action.payload);
    },
  },
});

export const { addFavPokemon } = favPokemonSlice.actions;
export default favPokemonSlice.reducer;
