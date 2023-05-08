import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './componentes/primerComponente/primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from './componentes/segundoComponente/segundo-componente/segundo-componente.component';
import { CompPersonaComponent } from './componentes/compPersona/comp-persona/comp-persona.component';
import { TercerComponenteComponent } from './componentes/tercerComponente/tercer-componente/tercer-componente.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CuartoComponenteComponent } from './componentes/cuartoComponente/cuarto-componente/cuarto-componente.component';
import { AboutCompComponent } from './componentes/aboutComp/about-comp/about-comp.component';
import { QuintoComponenteComponent } from './componentes/quintoComponente/quinto-componente/quinto-componente.component';
import { LoginCompComponent } from './componentes/loginComp/login-comp/login-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    SegundoComponenteComponent,
    CompPersonaComponent,
    TercerComponenteComponent,
    CuartoComponenteComponent,
    AboutCompComponent,
    QuintoComponenteComponent,
    LoginCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
