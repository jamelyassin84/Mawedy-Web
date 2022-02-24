import { NgModule } from '@angular/core'
import { AgmCoreModule } from '@agm/core'
import { SharedModule } from '../../shared/shared.module'
import { ClinicProfileComponent } from './clinic-profile/clinic-profile.component'
import { ClinicProfileServicesComponent } from './clinic-profile-services/clinic-profile-services.component'
import { environment } from 'src/environments/environment'
import { CommonModule } from '@angular/common'

@NgModule({
	declarations: [ClinicProfileComponent, ClinicProfileServicesComponent],
	imports: [
		CommonModule,
		SharedModule,
		AgmCoreModule.forRoot({
			apiKey: environment.GOOGLEMAPS,
		}),
	],
	exports: [],
})
export class ClinicProfileModule {}
