import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "../donnees/mock-pokemons";
import { Pokemon } from "../donnees/pokemon";
import { PokemonTypeColor } from "../pipes/pokemon-type-color.pipe";
import { ActivatedRoute, Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { FormPokemonComponent } from "./form-pokemon.component";

@Component({
  standalone: true,
  selector: 'edit-Pokemon',
  templateUrl: 'edit-pokemon.component.html',
  imports: [PokemonTypeColor, DatePipe, FormPokemonComponent]
})
export class EditPokemonComponent implements OnInit{

  pokemons: Pokemon[];

  //variable qui va récupérer le pokemon sélectionné
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router){
    this.pokemons = [];
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.pokemons = POKEMONS;

    for(let index = 0; index < this.pokemons.length; index++){
      if(id == this.pokemons[index].id){
        this.pokemon = this.pokemons[index];
      }      
    }
  }
  
  goBack(){
    this.router.navigate(['/']);
  }

  goEdit(pokemon: Pokemon){
    let link = ['/pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }

}
