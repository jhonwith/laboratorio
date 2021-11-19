import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { EducacionComponent } from './educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    DatospersonalesComponent,
    UbicacionComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
