import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Departamento } from '../models/Departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor(
    private http: HttpClient
  ) { }


  getDepartamentos(): Observable<any> {
    let request = 'api/Departamentos'
    return this.http.get(environment.apiDepartamentos + request)
  }

  getDepartamento(id: number): Observable<any> {
    let request = 'api/Departamentos/' + id
    return this.http.get(environment.apiDepartamentos + request)
  }

  postDepartamento(departamento: Departamento): Observable<any> {
    let request = 'api/Departamentos'
    let header = new HttpHeaders()
    header = header.set('Content-Type', 'application/json');

    return this.http.post(environment.apiDepartamentos + request, JSON.stringify(departamento), {headers: header})
  }

  putDepartamento(departamento: Departamento): Observable<any> {
    let request = 'api/Departamentos'
    let header = new HttpHeaders()
    header = header.set('Content-Type', 'application/json');

    return this.http.put(environment.apiDepartamentos + request, JSON.stringify(departamento), {headers: header})
  }
}
