import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { DoctorsProfileComponent } from './doctors-profile/doctors-profile.component'
@NgModule({
	declarations: [DoctorsProfileComponent],
	imports: [SharedModule],
	exports: [],
})
export class DoctorsProfileModule {}
