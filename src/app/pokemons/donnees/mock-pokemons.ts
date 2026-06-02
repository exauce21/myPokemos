import { Pokemons } from "./pokemons";

export const POKEMOS: Pokemons[] = [
    {
        id: 1,
        hp: 100,
        cp: 10,
        name: "Bulbizarre",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        types: ['Plante', 'Poison'],
        created: new Date()
    },
    {
        id: 2,
        hp: 200,
        cp: 20,
        name: "Salamèche",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        types: ['Feu'],
        created: new Date()
    },
    {
        id: 3,
        hp: 300,
        cp: 30,
        name: "Carapuce",
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        types: ['Eau'],
        created: new Date()
    }
];