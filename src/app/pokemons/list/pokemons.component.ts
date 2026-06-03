import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "../donnees/mock-pokemons";
import { Pokemon } from "../donnees/pokemon";
import { DatePipe } from "@angular/common";
import { PokemonTypeColor } from "../pipes/pokemon-type-color.pipe";
import { BorderCardDirective } from "../directives/border-card.directive";
import { Router } from "@angular/router";

@Component({
  standalone: true,
  selector: 'list-pokemons',
  templateUrl: './pokemons.component.html',
  imports: [DatePipe, PokemonTypeColor, BorderCardDirective]
})
export class PokemonsComponent implements OnInit{

  pokemons: Pokemon[];

  constructor(private router: Router){
    this.pokemons = [];
  }
  
  ngOnInit(): void {
    this.pokemons = POKEMONS;
    console.log(this.pokemons);
  }

  selectPokemon(pokemon: Pokemon){
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}