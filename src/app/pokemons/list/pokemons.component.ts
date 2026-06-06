import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../donnees/pokemon";
import { DatePipe } from "@angular/common";
import { PokemonTypeColor } from "../pipes/pokemon-type-color.pipe";
import { BorderCardDirective } from "../directives/border-card.directive";
import { Router } from "@angular/router";
import { PokemonsService } from "../pokemons.service";
import { SearchPokemonComponent } from "../search-pokemons/search-pokemons.component";
import { PokemonRarete } from "../pipes/pokemon-rarete.pipe";

@Component({
  standalone: true,
  selector: 'list-pokemons',
  templateUrl: './pokemons.component.html',
  imports: [DatePipe, PokemonTypeColor, BorderCardDirective, SearchPokemonComponent, PokemonRarete]
})
export class PokemonsComponent implements OnInit{

  pokemons: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonsService){
    this.pokemons = [];
  }
  
  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemons) => {
        this.pokemons = pokemons
      });
  }

  selectPokemon(pokemon: Pokemon){
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

  deletePokemon(pokemon: Pokemon){
    this.pokemonService.deletePokemon(pokemon.id).subscribe(() => {
        this.pokemons = this.pokemons.filter(p => p.id !== pokemon.id);
      }
    );
  }

}