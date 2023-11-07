import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuartoJuego2Component } from './components/cuarto-juego2/cuarto-juego2.component';
import { TerceroJuego1Component } from './components/tercero-juego1/tercero-juego1.component';
import { CuartoJuego1Component } from './components/cuarto-juego1/cuarto-juego1.component';
import { Juedo2de3roComponent } from './components/juedo2de3ro/juedo2de3ro.component';

const routes: Routes = [
  { path: 'cuarto-juego2', component: CuartoJuego2Component },
  { path: 'tercero-juego1', component: TerceroJuego1Component },
  { path: 'cuarto-juego1', component: CuartoJuego1Component },
  { path: 'juedo2de3ro', component: Juedo2de3roComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
