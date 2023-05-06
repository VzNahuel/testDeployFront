import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  //Ejemplo de funcion
  holaMundo = () => {
    return "Hola mundo!"
  }

  registro = {
    nombre: 'Nahuel',
    dni: 43432369
  };

  bandera: boolean = true;

  productos: string[] = ["Coca1L", "Galletas", "Chocolates"];

  best: string = "Payton";
  group: string[] = ["Payton", "Liyuu", "Date", "Nako", "Nagi"];
}
