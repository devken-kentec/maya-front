import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalFormComponent } from './animal-form/animal-form.component';


@NgModule({
  declarations: [
    AnimalFormComponent
  ],
  imports: [
    CommonModule,
    AnimalRoutingModule
  ]
})
export class AnimalModule { }
