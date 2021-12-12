import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientOutreachComponent } from './patient-outreach/patient-outreach.component';
import { ModalsNewAppointmentsComponent } from './appointments/modals-new-appointments/modals-new-appointments.component';
import { AppointmentDetailsComponent } from './appointments/modals-new-appointments/modals/appointment-details/appointment-details.component';
import { SelectTimeSlotComponent } from './appointments/modals/select-time-slot/select-time-slot.component';
import { SelectDoctorComponent } from './appointments/modals/select-doctor/select-doctor.component';
import { ConfirmationComponent } from './appointments/modals/confirmation/confirmation.component';
import { AssignAppointmentToComponent } from './appointments/modals/assign-appointment-to/assign-appointment-to.component';



@NgModule({
  declarations: [
    AppointmentsComponent,
    PatientOutreachComponent,
    ModalsNewAppointmentsComponent,
    AppointmentDetailsComponent,
    SelectTimeSlotComponent,
    SelectDoctorComponent,
    ConfirmationComponent,
    AssignAppointmentToComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
