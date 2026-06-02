import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-compteur',
    templateUrl: './compteur.component.html',
})
export class CompteurComponent {

    count = 0;

    increment() {
        this.count++;
    }

    decrement() {
        if (this.count > 0) {
            this.count--;
        }
    }
}
