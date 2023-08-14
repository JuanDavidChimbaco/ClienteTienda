import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductoComponent } from './componentes/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    InicioComponent,
    PiePaginaComponent,
    CategoriaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
