import { Component, OnInit } from '@angular/core';
import { POKEMOS } from '../donnees/mock-pokemons';
import { Pokemons } from '../donnees/pokemons';
import { DatePipe } from '@angular/common';
import { PokemonTypeColor } from '../pipes/pokemon-type-color.pipes';  

@Component({
  standalone: true, // il rend le composant autonome, c'est à dire qu'il n'a pas besoin d'être déclaré dans un module pour être utilisé
  selector: 'list-pokemons', // le nom de la balise HTML qui permettra d'afficher ce composant
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
  imports: [DatePipe, PokemonTypeColor]
})

export class PokemonsComponent implements OnInit {

    pokemons: Pokemons[]; // 

    constructor() {
        this.pokemons = [];
    }

    ngOnInit(): void {
        this.pokemons = POKEMOS;
        console.log(this.pokemons);
    }

}