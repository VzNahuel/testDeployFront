import { Component } from '@angular/core';

@Component({
  selector: 'app-tercer-componente',
  templateUrl: './tercer-componente.component.html',
  styleUrls: ['./tercer-componente.component.css']
})
export class TercerComponenteComponent {
  //ngModel se encargara de cambiar este valor
  nombre: string = "";

  //Tuve que hacer que reciba texto, marcar dni como undefined, y parsear...
  //Pero ahora "funciona"
  dni: number | undefined;

  cambiaDni(valor: string) {
    this.dni = parseInt(valor);
  }

  //onClick NO me deja crear variables dentro. Solo puedo operar parametros...
  // y tal vez usar variables GLOBALES (ej: this.nombre)
  onClick() {
    alert('Hiciste click!!');
  }


}
