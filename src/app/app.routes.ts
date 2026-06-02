import { Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/list/pokemons.component';
import { CompteurComponent } from './compteur/compteur.component';
import { NotFoundComponent } from './page404/noFound.component';

export const routes: Routes = [
    { path: '', component: PokemonsComponent },
    { path: 'compteur', component: CompteurComponent },


    
    { path: '**', component: NotFoundComponent}
];
