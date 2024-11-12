import { Component } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { DepartamentosService } from '../../services/departamentos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-departamento',
  templateUrl: './post-departamento.component.html',
  styleUrl: './post-departamento.component.css'
})
export class PostDepartamentoComponent {

  public departamento: Departamento = {
    idDepartamento: 0,
    nombre: '',
    localidad: ''
  };


  constructor(
    private _departamentosService: DepartamentosService,
    private router: Router
  ) {}


  postDepartamento() {
    if (this.departamento.idDepartamento && this.departamento.nombre && this.departamento.localidad) {
      this._departamentosService.postDepartamento(this.departamento).subscribe(() => {
        Swal.fire('¡Añadido!', 'El departamento ha sido añadido.', 'success');
        this.router.navigate([''])
      })
    } else {
      alert('Por favor complete todos los campos');
    }
  }

}
