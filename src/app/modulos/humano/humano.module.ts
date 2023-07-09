import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanoRoutingModule } from './humano-routing.module';
import { HumanoFormComponent } from './humano-form/humano-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HumanoFormComponent
  ],
  imports: [
    CommonModule,
    HumanoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class HumanoModule { }
