import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients/patients.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { UploadModalComponent } from './modals/upload-modal/upload-modal.component';



@NgModule({
  declarations: [
    PatientsComponent,
    PatientInfoComponent,
    BookingListComponent,
    UploadModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientsModule { }
