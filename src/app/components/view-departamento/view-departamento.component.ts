import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from '../../models/Departamento';
import { DepartamentosService } from '../../services/departamentos.service';

@Component({
  selector: 'app-view-departamento',
  templateUrl: './view-departamento.component.html',
  styleUrl: './view-departamento.component.css'
})
export class ViewDepartamentoComponent implements OnInit {

  public departamento: Departamento = {
    idDepartamento: 0,
    nombre: '',
    localidad: ''
  };


  constructor(
    private route: ActivatedRoute,
    private _departamentosService: DepartamentosService,
  ) {}


  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.getDepartamento(id)
  }

  getDepartamento(id: number){
    this._departamentosService.getDepartamento(id).subscribe(response => {
      this.departamento = response
    })
  }

}
