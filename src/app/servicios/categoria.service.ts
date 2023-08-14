import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/modelos/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  // aqui va todo el codigo de la clase CategoriaService
  url = 'http://localhost:3000/categoria';
  url2 = 'https://dajun318.pythonanywhere.com/api/categoria/';

  constructor(private http: HttpClient) {}

    listaCategorias():Observable<any> {
      return this.http.get(this.url2);
    }

    getCategoria(id: number):Observable<any> {
      return this.http.get(this.url2 +"/"+ id);
    }

    eliminarCategoria(id: number):Observable<any> {
      return this.http.delete(this.url2 +"/"+ id);
    }

    agregarCategoria(categoria: Categoria):Observable<any> {
      return this.http.post(this.url2, categoria);
    }

    editarCategoria(id:number, categoria: Categoria):Observable<any> {
      return this.http.put(this.url2 +"/"+ id, categoria);
    }
}
