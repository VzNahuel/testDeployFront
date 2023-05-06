import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './componentes/primerComponente/primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from './componentes/segundoComponente/segundo-componente/segundo-componente.component';
import { CompPersonaComponent } from './componentes/compPersona/comp-persona/comp-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    SegundoComponenteComponent,
    CompPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
