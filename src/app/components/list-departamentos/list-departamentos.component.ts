import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { DepartamentosService } from '../../services/departamentos.service';

@Component({
  selector: 'app-list-departamentos',
  templateUrl: './list-departamentos.component.html',
  styleUrl: './list-departamentos.component.css'
})
export class ListDepartamentosComponent implements OnInit {

  public departamentos!: Departamento[];

  constructor(
    private _departamentosService: DepartamentosService
  ) {}


  ngOnInit(): void {
    this._departamentosService.getDepartamentos().subscribe(response => {
      this.departamentos = response
    })
  }

}
