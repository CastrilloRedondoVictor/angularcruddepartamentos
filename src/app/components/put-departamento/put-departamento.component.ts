import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { DepartamentosService } from '../../services/departamentos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-put-departamento',
  templateUrl: './put-departamento.component.html',
  styleUrl: './put-departamento.component.css'
})
export class PutDepartamentoComponent implements OnInit {

  public departamento: Departamento = {
    idDepartamento: 0,
    nombre: '',
    localidad: ''
  };


  constructor(
    private route: ActivatedRoute,
    private _departamentosService: DepartamentosService,
    private router: Router
  ) {}


  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this._departamentosService.getDepartamento(id).subscribe(response => {
      this.departamento = response
    })
  }


  putDepartamento() {
    console.log(this.departamento)
    if (this.departamento.idDepartamento && this.departamento.nombre && this.departamento.localidad) {
      this._departamentosService.postDepartamento(this.departamento).subscribe(() => {
        this.router.navigate([''])
      })
    } else {
      alert('Por favor complete todos los campos');
    }
  }

}
