import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculosComponent } from './vehiculo/vehiculo.component';


const routes: Routes = [
  {path: '', redirectTo: '/parqueadero', pathMatch: 'full'},
  {path: 'parqueadero', component: VehiculosComponent},
  {path: 'parqueadero/:placa', component: VehiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
