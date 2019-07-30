import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of, from} from 'rxjs';
import { Vehiculo } from './vehiculo';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private urlEndPoint: string = 'http://localhost:3000/parqueadero';
  private httHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  obtenerVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.urlEndPoint + '/vehiculos');
  }

  registrarVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(this.urlEndPoint, vehiculo, {headers: this.httHeaders});
  }

  registrarSalidaVehiculo(placa:string): Observable<Vehiculo> {
    console.log(placa);
    return this.http.put<Vehiculo>(`${this.urlEndPoint}/${placa}`, {headers: this.httHeaders});
  }
}
