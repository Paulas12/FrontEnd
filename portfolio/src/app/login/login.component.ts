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
      password:['', [Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {}

  get Password(){
    return this.form.get("password");
  }

  get Mail(){
    return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid(){
    return false
  }

  onEnviar(event: Event){
    //obtenemos la propagacion o ejecucion del componente submit de un form
    event.preventDefault;

    if (this.form.valid) {
      //llamamos a nuestro servicio para enviar los datos al servidor
      //tambien podemos ejecutar alguna lógica extra
      alert("Todo salió bien ¡Enviar formulario!")
    } else {
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }
}
