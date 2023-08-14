import { Component,OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { Categoria } from 'src/app/modelos/categoria.model';
import { Location } from '@angular/common';
import { FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{

  public frmCategoria!: FormGroup;
  public categoria!: Categoria;
  public mensaje: string = '';
  public listaCategoria : any;

  constructor(private categoriaService: CategoriaService, private location: Location) { }

  obtenerCatgorias() {
    this.categoriaService.listaCategorias().subscribe(data=>{
      console.log(data);
      this.listaCategoria = data;
    },error => {
      console.log(error);
    });
  }

  public agregarCategoria = (frmCategoriaValue: {txtNombre: string;})=>{
    // validar el formulario
    if (this.frmCategoria.valid){
      this.categoria = new Categoria(frmCategoriaValue.txtNombre.valueOf());
    }
    this.categoriaService.agregarCategoria(this.categoria).subscribe(respuesta=>{
      console.log(respuesta);
      this.mensaje = 'Registro guardado correctamente';
    },error =>{
      console.log(error);
      this.mensaje = 'Error Problemas al agregar Categoria';
      this.frmCategoria.reset();
    });
  }

  ngOnInit(): void {
    this.frmCategoria = new FormGroup({
      txtNombre: new FormControl('',[Validators.required,Validators.maxLength(60)]),
    });
  }

}
