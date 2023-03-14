export class persona{
    id?: number;
    nombre: String;
    apellido: String; 
    img: String;

    constructor(nombre: String, apellido: String, img: String){ //inicializando las variables
        this.nombre = nombre; 
        this.apellido = apellido; 
        this.img = img; 
    }
}