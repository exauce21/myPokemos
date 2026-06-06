import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pokemonRarete'})
export class PokemonRarete implements PipeTransform {
  
    transform(rarete: number): { color: string,} {
        
        let color : string;

        if (rarete <= 2) {
            color = '#cd7f32';
        } else if (rarete <= 4) {
            color = '#c0c0c0';
        } else {
            color = '#ffd700';
        }

        return { color };
    }
}