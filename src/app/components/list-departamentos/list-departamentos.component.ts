import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { DepartamentosService } from '../../services/departamentos.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-departamentos',
  templateUrl: './list-departamentos.component.html',
  styleUrl: './list-departamentos.component.css'
})
export class ListDepartamentosComponent implements OnInit {

  public departamentos!: Departamento[];

  constructor(
    private _departamentosService: DepartamentosService,
    private _router: Router
  ) {}


  ngOnInit(): void {
    console.log('ss')
    this.cargarDepartamentos();
  }

  cargarDepartamentos() {
    this._departamentosService.getDepartamentos().subscribe(response => {
      this.departamentos = response
    })
  }

  deleteDepartamento(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._departamentosService.deleteDepartamento(id).subscribe(
          () => {
            Swal.fire('¡Eliminado!', 'El departamento ha sido eliminado.', 'success');
            this.cargarDepartamentos();
          },
          error => {
            console.error('Error al eliminar el departamento', error);
            Swal.fire('Error', 'No se pudo eliminar el departamento.', 'error');
          }
        );
      }
    });
  }

}
