import { Component, OnInit } from '@angular/core';
//importar las libreria de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){
    //Creamos el grupo de controles para la formulacion de login 
    this.form= this.formBuilder.group({
      password:['', [Validators.required, Validators.minLength(8)]],//tambien se puede usar maxLength para la longitud maxima del password
      email:['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {}
//Metodos para el formulario: toma el dato del password 
  get Password(){
    return this.form.get("password");
  }
//toma datos del mail
  get Mail(){
    return this.form.get("email");
  }
//metodo de validacion del password 
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
//metodo de validacion de mail 
  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid; 
  }

  onEnviar(event: Event){
    //detenemos la propagacion o ejecucion del componente submit de un form
    event.preventDefault;

    if (this.form.valid) {
      //llamamos a nuestro servicio para enviar los datos al servidor
      //tambien podemos ejecutar alguna lógica extra
      alert("Todo salió bien ¡Enviar formulario!")
    } else {
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
      alert("Contraseña o correo incorrectos")
    }
  }
}
