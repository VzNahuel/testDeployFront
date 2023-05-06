import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-persona',
  templateUrl: './comp-persona.component.html',
  styleUrls: ['./comp-persona.component.css']
})
export class CompPersonaComponent {
  id : number = 1;
  nombre: string = "Nahuel";
  apellido: string = "Valdez";
}
