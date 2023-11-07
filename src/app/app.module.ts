import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { CuartoJuego2Component } from './components/cuarto-juego2/cuarto-juego2.component';
import { FormsModule } from '@angular/forms';
import { CuartoJuego1Component } from './components/cuarto-juego1/cuarto-juego1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuartoJuego2Component,
    CuartoJuego1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
