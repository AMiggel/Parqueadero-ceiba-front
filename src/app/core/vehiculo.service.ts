import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of, from} from 'rxjs';
import { Vehiculo } from './vehiculo';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private urlEndPoint: string = environment.url;
  private httHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  obtenerVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.urlEndPoint + '/vehiculos');
  }

  registrarVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(this.urlEndPoint, vehiculo, {headers: this.httHeaders});
  }

  registrarSalidaVehiculo(placa: String): Observable<Vehiculo> {
    return this.http.put<Vehiculo>(`${this.urlEndPoint}/${placa}`, {headers: this.httHeaders});
  }
}
