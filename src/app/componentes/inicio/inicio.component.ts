import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelos/categoria.model';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

    categorias: Categoria[] = [];

    constructor(private categoriaService: CategoriaService, private router: Router) {
      this.categoriaService.listaCategorias().subscribe(
        (categorias) => {
          this.categorias = categorias;
        }
      );
    }

    iconos: { [nombreCategoria: string]: string }= {
      'Electrodomésticos': 'fa-solid fa-blender fa-bounce fa-5x',
      'Ropa': 'fa-solid fa-shirt fa-bounce fa-5x',
      'Zapatos': 'fa-solid fa-shoe-prints fa-bounce fa-5x',
      'Herramientas': 'fa-solid fa-screwdriver-wrench fa-bounce fa-5x',
      'Accesorios': 'fa-solid fa-spinner fa-bounce fa-5x'
    };



}
