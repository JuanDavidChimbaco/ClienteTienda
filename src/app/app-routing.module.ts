import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductoComponent } from './componentes/producto/producto.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'producto', component: ProductoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
