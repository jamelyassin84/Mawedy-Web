import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicProfileComponent } from './clinic-profile/clinic-profile.component';
import { ClinicProfileServicesComponent } from './clinic-profile-services/clinic-profile-services.component';
import { ClinicServiceCardComponent } from './components/clinic-service-card/clinic-service-card.component';
import { AddMedicalServicesComponent } from './modals/add-medical-services/add-medical-services.component';



@NgModule({
  declarations: [
    ClinicProfileComponent,
    ClinicProfileServicesComponent,
    ClinicServiceCardComponent,
    AddMedicalServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClinicProfileModule { }
