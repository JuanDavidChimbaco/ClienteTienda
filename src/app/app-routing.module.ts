import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'editarProducto/:id', component: EditarProductoComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
