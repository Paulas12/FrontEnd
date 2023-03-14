import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  persona: persona = new persona("", "", "");

  constructor(public personaServices: PersonaService ) { }

  ngOnInit(): void {
      this.personaServices.getPersona().subscribe(data => {this.persona = data})
  }
}
