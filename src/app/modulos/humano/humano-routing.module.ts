import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanoFormComponent } from './humano-form/humano-form.component';

const routes: Routes = [
  //{ path: '', component: EmpresaListComponent },
  //{ path: 'editar/:id', component: EmpresaFormComponent },
  { path: 'new', component: HumanoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanoRoutingModule { }
