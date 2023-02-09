import { Injectable } from '@angular/core';
//suscribirse a los datos y que reciba respuestas asincronas

import { Observable } from 'rxjs';
//hacer peticiones y CRUD

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //http = alias
  constructor(private http:HttpClient) { }

  //metodo Observable que devuelve datos
  getDatos():Observable<any>{
    //retorno de datos utilizando el metodo get ef HttpClient que llama a la base de datos JSON o a una URL

    return this.http.get('./asset/db/datos .json');
    //acá podria poner un callback para ver la opción de problema de conexión del servidor
  }
}
