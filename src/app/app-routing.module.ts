import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartamentosComponent } from './components/list-departamentos/list-departamentos.component';
import { PostDepartamentoComponent } from './components/post-departamento/post-departamento.component';
import { PutDepartamentoComponent } from './components/put-departamento/put-departamento.component';
import { ViewDepartamentoComponent } from './components/view-departamento/view-departamento.component';

const routes: Routes = [
  {path: '', component: ListDepartamentosComponent},
  {path: 'new', component: PostDepartamentoComponent},
  {path: 'edit/:id', component: PutDepartamentoComponent},
  {path: 'view/:id', component: ViewDepartamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
