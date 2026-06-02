import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../donnees/mock-pokemons';
import { Pokemon } from '../donnees/pokemon';
import { DatePipe } from '@angular/common';
import { PokemonTypeColor } from '../pipes/pokemon-type-color.pipes';  
import { BorderCardDirective } from '../directives/border-card.directive';
import { Router } from '@angular/router';

@Component({
  standalone: true, // il rend le composant autonome, c'est à dire qu'il n'a pas besoin d'être déclaré dans un module pour être utilisé
  selector: 'list-pokemons', // le nom de la balise HTML qui permettra d'afficher ce composant
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
  imports: [DatePipe, PokemonTypeColor, BorderCardDirective]
})

export class PokemonsComponent implements OnInit {

    pokemons: Pokemon[]; // 

    constructor(private router: Router) {
        this.pokemons = [];
    }

    ngOnInit(): void {
        this.pokemons = POKEMONS;
        console.log(this.pokemons);
    }

    selectPokemon(pokemon: Pokemon) {
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

}