import { Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/list/pokemons.component';
import { CounterComponent } from './pokemons/counter/counter.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DetailPokemonComponent } from './pokemons/detail/detail-pokemon.component';
import { EditPokemonComponent } from './pokemons/edit/edit-pokemon.component';

export const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'compteur', component: CounterComponent },
  { path: 'pokemon/edit/:id', component: EditPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent },
  { path: '**', component: PageNotFoundComponent }
];
