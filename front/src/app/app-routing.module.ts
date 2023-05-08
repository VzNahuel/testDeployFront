import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Los nombre de los imports estan en appModule.ts
import { AboutCompComponent } from './componentes/aboutComp/about-comp/about-comp.component';

//Ruta por defecto: vista inicial
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'sobre-nosotros', component: AboutCompComponent},

  //El path vacio siempre llevara a "inicio"
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
