import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDepartamentosComponent } from './components/list-departamentos/list-departamentos.component';
import { MenuComponent } from './components/menu/menu.component';
import { PostDepartamentoComponent } from './components/post-departamento/post-departamento.component';
import { PutDepartamentoComponent } from './components/put-departamento/put-departamento.component';
import { DepartamentosService } from './services/departamentos.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListDepartamentosComponent,
    MenuComponent,
    PostDepartamentoComponent,
    PutDepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DepartamentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
