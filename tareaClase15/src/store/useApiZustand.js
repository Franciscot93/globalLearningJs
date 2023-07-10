import { create } from "zustand";

const pokeApiURL = "https://pokeapi.co/api/v2/pokemon/";
export const useApiZustand = create((set, _get) => ({
  pokemons: [],
  getPokemons: async() => {
    const pokemonList = await fetch(pokeApiURL);
    const pokemonCapturados=  await pokemonList.json()
    set({pokemons:pokemonCapturados.results})
  },
}));


