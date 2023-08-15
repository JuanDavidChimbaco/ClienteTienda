import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Producto } from 'src/app/modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:8000/producto';
  url2 = 'http://dajun318.pythonanywhere.com/api/producto/';
  url3 = 'https://dajun318.pythonanywhere.com/api/productoCodigo/'

  constructor(private http: HttpClient) {}

  getProductos():Observable<any> {
    return this.http.get(this.url2);
  }

  getProducto(id: number):Observable<any> {
    return this.http.get(this.url2+'/'+id+ '/');
  }

  eliminarProducto(id: number):Observable<any> {
    return this.http.delete(this.url2+'/'+id + '/');
  }

  agregarProducto(formData: FormData){
    return this.http.post(this.url2, formData);
  }

  editarProducto(id:number, formData: FormData){
    return this.http.put(this.url2+ id + '/', formData);
  }

  getProductoByCodigo(codigo: string):Observable<any> {
    return this.http.get(this.url3 +codigo+'/');
  }

}
