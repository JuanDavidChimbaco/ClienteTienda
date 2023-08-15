import { Component,OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelos/categoria.model';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {
  public frmCategoria!: FormGroup;
  public categoria!: Categoria;
  public mensaje: string = '';
  public listaCategoria : any;

  constructor(private location: Location,private categoriaService: CategoriaService) {
  }

  obtenerCatgorias() {
    this.categoriaService.listaCategorias().subscribe(data=>{
      console.log(data);
      this.listaCategoria = data;
    },error => {
      console.log(error);
    });
  }

  public agregarCategoria = (frmCategoriaValue: {txtNombre: string; fileFoto: File})=>{
    // validar el formulario
    console.log(this.frmCategoria.valid);
    if (!this.frmCategoria.valid){
      this.mensaje = 'Error Problemas con el formulario';
      return;
    }else{
      // if (!frmCategoriaValue.fileFoto) {
      //   this.mensaje = 'Error Debes seleccionar una imagen';
      //   return;
      // }
      this.categoria = new Categoria(frmCategoriaValue.txtNombre.valueOf());
    }
    this.categoriaService.agregarCategoria(this.categoria).subscribe(respuesta=>{
      console.log(respuesta);
      this.mensaje = 'Registro guardado correctamente';
      this.frmCategoria.reset();
    },error =>{
      console.log(error);
      this.mensaje = 'Error Problemas al agregar Categoria';
      this.frmCategoria.reset();
    });
  }

  ngOnInit(): void {
    this.frmCategoria = new FormGroup({
      txtNombre: new FormControl('',
      [Validators.required,Validators.maxLength(60),Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
    });
  }

}
