import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { DepartamentosService } from '../../services/departamentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    this.getDepartamento(id)
  }

  getDepartamento(id: number){
    this._departamentosService.getDepartamento(id).subscribe(response => {
      this.departamento = response
    })
  }


  putDepartamento() {
    if (this.departamento.idDepartamento && this.departamento.nombre && this.departamento.localidad) {
      this._departamentosService.putDepartamento(this.departamento).subscribe(() => {
        Swal.fire('¡Editado!', 'El departamento ha sido editado.', 'success');
        this.router.navigate([''])
      })
    } else {
      alert('Por favor complete todos los campos');
    }
  }

}
