import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectoss : any = [];                            //instanciar la variable para luego usarla en el metodo. En este caso es un array
  //nombresito : string = '';   acá se instancia un dato simple de tipo spring 
  
  constructor(private datos: DatosService){}      //se arma el constructor con el alias "datos" que usamos para utilizar el servicio

  ngOnInit(): void {
    
    this.datos.getDatos().subscribe(data =>{   //este servicio va a utilizar el metodo getDatos que definimos en datos.service.ts, nos vamos a subscribir con la subscripcion "data"(otro alias)
      
      this.proyectoss = data.proyectos;    //le decimos que queremos todos los datos del proyecto
      //lo que queremos es el array de la linea 10, es decir todos los datos de proyectos 
      //data.proyectos va a traer los datos que figuran en "proyectos" del archivo datos.json
      //para el ejemplo de sting nombrecito quedaria 
     // this.nombresito = data.nombre; //en este caso le decimos que queremos el dato nombre del archivo datos.json y nos devolvera el nombre que figure dentro de "proyectos"
    })
  }

}
