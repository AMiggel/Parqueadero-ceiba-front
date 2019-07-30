import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../core/vehiculo';
import { from } from 'rxjs';
import { VehiculoService } from '../core/vehiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: './app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: []
})
export class VehiculosComponent implements OnInit {

  vehiculos: Vehiculo[];
  vehiculo: Vehiculo = new Vehiculo();

  filtroVehiculo='';

  constructor(private vehiculoService: VehiculoService,
              private router: Router,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.vehiculoService.obtenerVehiculos().subscribe(vehiculos => this.vehiculos = vehiculos
    );
  }

  public registrarVehiculoParqueadero(): void {
    console.log("asdasdasd")
    this.vehiculoService.registrarVehiculo(this.vehiculo).subscribe( vehiculo => {
      this.router.navigate(['/parqueadero'])
      Swal.fire('Nuevo vehiculo registrado', `Vehiculo con placa ${this.vehiculo.placa} registrado con exito`, 'success')
    }
    );
  }

  public registrarSalida(placa: string): void {
    console.log(placa);
    this.vehiculoService.registrarSalidaVehiculo(placa)
    .subscribe(vehiculo => {
      this.router.navigate(['/parqueadero']);
    });
  }

}
