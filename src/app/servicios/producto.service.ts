import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:3000/producto';
  url2 = 'https://dajun318.pythonanywhere.com/api/producto/';

  constructor(private http: HttpClient) {}

  getProductos():Observable<any> {
    return this.http.get(this.url2);
  }

  getProducto(id: number):Observable<any> {
    return this.http.get(this.url2 +"/"+ id);
  }

  eliminarProducto(id: number):Observable<any> {
    return this.http.delete(this.url2 +"/"+ id);
  }

  // agregarProducto(producto: Producto):Observable<any> {
  //   return this.http.post(this.url2, producto);
  // }

  agregarProducto(formData: FormData){
    return this.http.post(this.url2, formData);
  }

  editarProducto(id:number, producto: Producto):Observable<any> {
    return this.http.put(this.url2 +"/"+ id, producto);
  }

}
