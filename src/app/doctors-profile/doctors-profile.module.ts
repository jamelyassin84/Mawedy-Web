import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsProfileComponent } from './doctors-profile/doctors-profile.component';
import { AvailabilityComponent } from './modals/availability/availability.component';
import { DoctorProfileModalComponent } from './modals/doctor-profile-modal/doctor-profile-modal.component';



@NgModule({
  declarations: [
    DoctorsProfileComponent,
    AvailabilityComponent,
    DoctorProfileModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DoctorsProfileModule { }
