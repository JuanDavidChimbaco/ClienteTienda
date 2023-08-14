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

  getproductos():Observable<any> {
    return this.http.get(this.url2);
  }

  getproducto(id: number):Observable<any> {
    return this.http.get(this.url2 +"/"+ id);
  }

  eliminarproducto(id: number):Observable<any> {
    return this.http.delete(this.url2 +"/"+ id);
  }

  agregarproducto(producto: Producto):Observable<any> {
    return this.http.post(this.url2, producto);
  }

  editarproducto(id:number, producto: Producto):Observable<any> {
    return this.http.put(this.url2 +"/"+ id, producto);
  }

}
