import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  constructor() { }
  // instanciando
  formularioRelativo= new FormGroup({
    //nombres de los campos del formulario
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required)
  });
}
