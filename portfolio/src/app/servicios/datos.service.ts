import { Injectable } from '@angular/core';
//suscribirse a los datos y que reciba respuestas asincronas

import { Observable } from 'rxjs';
//hacer peticiones y CRUD

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //http : alias seria http:HttpClient o datosJson:HttpClient
  
  constructor(private http:HttpClient) { } //definimos la herramiente http que tiene metodos (get o set)

  //tenemos que crear al menos un metodo.En este caso será solo uno que va a ser para pedirle los datos al json.
  //Metodo Observable que devuelve datos

  getDatos():Observable<any>{  
  
    //getDatos es el nombre de la funcion(por eso termina entre ()) y la podemos cambiar con, por ej, obtenerData. any es que va a devolver cualquier cosa 
  //retorno de datos utilizando el metodo get ef HttpClient que llama a la base de datos JSON o a una URL

    return this.http.get('./asset/db/datos .json'); 
    
    //getDatos retorne esto(this) http con el metodo get (tomar) los datos del archivo json
    //acá podria poner un callback para ver la opción de problema de conexión del servidor
  }
}
