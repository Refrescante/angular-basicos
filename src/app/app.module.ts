import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Tarea:
// Crear un módulo llamado contadorModule
// declaraciones, y exportaciones

import { HeroesModule } from './heroes/heroe.module';
import { ContadorModule } from './Contador/Contador/contador.module';



@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    // importar aquí
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
