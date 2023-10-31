import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuartoJuego2Component } from './components/cuarto-juego2/cuarto-juego2.component';
import { TerceroJuego1Component } from './components/tercero-juego1/tercero-juego1.component';

const routes: Routes = [
  { path: 'cuarto-juego2', component: CuartoJuego2Component },
  { path: 'tercero-juego1', component: TerceroJuego1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
