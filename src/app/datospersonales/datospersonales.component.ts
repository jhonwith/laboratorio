import { Component, OnInit } from '@angular/core';
/* import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
}from "@angular/forms";
*/
@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})
export class DatospersonalesComponent implements OnInit {
  // public user: FormGroup;
  constructor() { }
  // private validateApellido(control: AbstractControl){
  //   var apellido = control.value;
  //   var error=null;
  //   if (!apellido.includes("Perez")) {
  //     error = "El apellido debe incluir perez";
  //   }
  //   return error;
  // }
// createForm(){
//   this.user=new FormGroup({
//   nombre:new FormControl("",Validators.required),
//   apellidos: new FormControl("", this.validateApellido),
//   edad: new FormControl("", [
//     Validators.required,
//     Validators.min(18),
//     Validators.max(65)
//   ]),
//   email: new FormControl("",Validators.email)
//   });
// }
  ngOnInit(): void {
  }

}
