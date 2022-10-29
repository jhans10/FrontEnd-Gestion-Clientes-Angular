
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';




@Injectable({
  providedIn: 'root'
})
export class ClienteService {
//esta url obtiene el listado de todos los empleados
private baseURL="http://localhost:8080/api/v1/clientes"; //http://localhost:8080

//este metodo nos sirve para obtener los clientes
  constructor(private httpClient:HttpClient) { }
  obtenerListaDeClientes(): Observable<Cliente[]>{
  return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
    
  }
  //este metodo nos sirve para registrar un empleado
   registrarCliente(cliente:Cliente):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cliente);
   }

   actualizarCliente(id:number,cliente:Cliente):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cliente);
   }

   obtenerClientePorId(id:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
   }

   eliminarClienteDelete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
   }


}
