import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  constructor(private dbzService: DbzService){ }

  
  public get personajes() : Personaje[] {
    return this.dbzService.personajes
  }
  
}
