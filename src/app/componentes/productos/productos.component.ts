import { Component,OnInit  } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  listaProductos: any;
  listaCategorias: any;
  display='none';
  idProducto: any;
  url:any;
  url2:any;

  constructor(private productoService: ProductoService, private categoriaService: CategoriaService, private router: Router) {
    this.url2 = 'https://dajun318.pythonanywhere.com/media/fotos';
    this.url = 'http://localhost:8000/fotos/';
  }

  obtenerProductos(){
    this.productoService.getProductos().subscribe((result)=>{
      this.listaProductos = result;
    });
  }

  listarCategorias(){
    this.categoriaService.listaCategorias().subscribe((result)=>{
      this.listaCategorias = result;
    });
  }

  cerrarModal(){
    this.display='none';
  }

  abrirModalEliminar(id:number){
    this.display='block';
    this.idProducto = id;
  }

  eliminarProducto(){
    this.productoService.eliminarProducto(this.idProducto).subscribe((result)=>{
      this.obtenerProductos();
      console.log(result);
    },error=>{
      console.log(error);
    });
    this.cerrarModal();
  }

  ngOnInit(): void {
      this.listarCategorias();
      this.obtenerProductos();
  }
}
