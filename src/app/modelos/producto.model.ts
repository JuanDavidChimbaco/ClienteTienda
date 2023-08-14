export class Producto {
  _id?: number;
  proCodigo: string;
  proNombre: string;
  proPrecio: number;
  proCategoria: number;
  proFoto: string;

  constructor(codigo: string, nombre: string, precio: number, categoria: number, proFoto: string) {
    this.proCodigo = codigo;
    this.proNombre = nombre;
    this.proPrecio = precio;
    this.proCategoria = categoria;
    this.proFoto = proFoto;
  }
}
