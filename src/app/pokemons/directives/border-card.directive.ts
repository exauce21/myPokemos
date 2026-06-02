import { Directive, ElementRef, HostListener } from "@angular/core";
import { Pokemon } from "../donnees/pokemon";
import { POKEMONS } from "../donnees/mock-pokemons";
import { PokemonTypeColor } from "../pipes/pokemon-type-color.pipes";

@Directive({
    selector: 'pkmBorderCard',
    standalone: true
})

export class BorderCardDirective {
    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#009686';
    private defaultHeight: number = 200;
    
    private initialBackgroundColor: string = '#f5f5f5';
    private defaultBackgroundColor: string = '#009686';

    private initialTransform: string = 'scale(0.95)';
    private defaultTransform: string = 'scale(1.05)';

    private initialTransition: string = 'all 0.3s ease-out';
    private defaultTransition: string = 'all 0.3s ease-in-out';


    constructor(private el: ElementRef) {
        this.setBorderColor(this.initialColor);
        this.setHeight(this.defaultHeight);
        this.setBackgroundColor(this.initialBackgroundColor);
        this.setTransform(this.initialTransform);
        this.setTransition(this.initialTransition);
    }

    private setBorderColor(color: string) {
        //let border = `solid 4px ${color}`;

        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setTransform(transform: string) {
        this.el.nativeElement.style.transform = transform;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }

    private setBackgroundColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    private setTransition(transition: string) {
        this.el.nativeElement.style.transition = transition;
    }

    @HostListener('mouseenter') onMouseEnter() {  
        this.setBorderColor(this.defaultColor); 
        this.setBackgroundColor(this.defaultBackgroundColor);
        this.setTransform(this.defaultTransform); 
        this.setTransition(this.defaultTransition);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorderColor(this.initialColor);
        this.setBackgroundColor(this.initialBackgroundColor);
        this.setTransform(this.initialTransform);
        this.setTransition(this.initialTransition);
    }


}