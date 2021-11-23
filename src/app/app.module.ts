import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { EducacionComponent } from './educacion/educacion.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    DatospersonalesComponent,
    UbicacionComponent,
    EducacionComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
