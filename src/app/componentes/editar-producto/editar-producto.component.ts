import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  public frmProducto!: FormGroup;
  public productId!: number;
  public listaCategorias: any;
  leFoto: any = document.getElementById("imagenProducto")
  public mensaje: string = '';
  public selectedFoto: File | undefined;
  public rutaImagen: string = ''; // Ruta de la imagen seleccionada
  public existe:boolean = false;

  constructor(private route: ActivatedRoute, private _categoriaService: CategoriaService,
    private productoService: ProductoService, private location: Location) { }

  listarCategorias() {
    this._categoriaService.listaCategorias().subscribe((result) => {
      this.listaCategorias = result;
    });
  }

  obtenerProductos() {
    this.productoService.getProducto(this.productId).subscribe((result) => {
      console.log(result);
      this.frmProducto.setValue({
        txtCodigo: result.proCodigo,
        txtNombre: result.proNombre,
        txtPrecio: result.proPrecio,
        cbCategoria: result.proCategoria,
        fileFoto: ""
      });
      this.leFoto = result.proFoto;
    });
  }

  agregarProducto() {
    if (!this.frmProducto.valid) {
      this.mensaje = "Error en el formulario";
      return;
    }
    // Validación de código repetido
    const codigo = this.frmProducto.value.txtCodigo;
    this.existeCodigoRepetido(codigo).subscribe(existe => {
      if (existe) {
        this.frmProducto.controls['txtCodigo'].setValue('');
        this.mensaje = "El código ya está en uso. Por favor, ingrese uno nuevo.";
      } else {
      const formData = new FormData();
      formData.append('proCodigo', this.frmProducto.value.txtCodigo);
      formData.append('proNombre', this.frmProducto.value.txtNombre);
      formData.append('proPrecio', this.frmProducto.value.txtPrecio);
      formData.append('proCategoria', this.frmProducto.value.cbCategoria);

      if (this.selectedFoto) {
        formData.append('proFoto', this.selectedFoto, this.selectedFoto.name);
      }
      console.log(formData);

      this.productoService.editarProducto(this.productId, formData).subscribe(respuesta => {
        console.log(respuesta);
        this.mensaje = "Producto editado correctamente";
        console.log(this.mensaje);

        this.location.back();
      }, error => {
        console.log(error);
        this.mensaje = error.error.proCodigo[0];
        this.frmProducto.controls['txtCodigo'].setValue('');
      });
    }
  });
  }

  public onFileSelect(event: any) {
    const selectedFile = event.target.files[0]; // Obtener el archivo seleccionado
    if (selectedFile) {
      this.selectedFoto = selectedFile;
      this.rutaImagen = URL.createObjectURL(selectedFile);
    }
  }

  existeCodigoRepetido(codigo: string): Observable<boolean> {
    return this.productoService.getProductoByCodigo(codigo).pipe(
      map(result => {
        if(result.proCodigo == codigo){
          return false
        }else{
          return true; // Retorna true si el código existe
        }
      }),
      catchError(error => {
        console.error(error);
        return of(false); // Retorna false si ocurre un error o el código no existe
      })
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = +params['id'];
    });
    this.listarCategorias();
    this.obtenerProductos();
    this.frmProducto = new FormGroup({
      txtCodigo: new FormControl('', [Validators.required]),
      txtNombre: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
      txtPrecio: new FormControl('', [Validators.required]),
      cbCategoria: new FormControl('', [Validators.required]),
      fileFoto: new FormControl('', [Validators.required]),
    });
  }
}
