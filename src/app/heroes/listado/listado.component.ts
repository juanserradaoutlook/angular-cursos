import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Capitán América', 'Spiderman', 'Ironman', 'Superman', 'Thor'];
  heroesBorrados: string[] = [];
  constructor() {}

  borrarHeroe(){
    //this.heroes.pop(); // Borra desde el último al primero
    console.log(this.heroes.length)
    if (this.heroes.length > 0) {
      const x = this.heroes[this.heroes.length - 1];
      this.heroes.pop();
      //this.heroes.shift();
      this.heroesBorrados.push(x);
      
    }
  }
}
