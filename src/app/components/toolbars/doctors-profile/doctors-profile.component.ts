import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { listAnimation } from 'src/app/animations/List.animation'
import { DoctorService } from 'src/app/services/utilities/doctor.service'
import { ModalService } from 'src/app/services/utilities/modal.service'

@Component({
	selector: 'toolbar-doctors-profile',
	templateUrl: './doctors-profile.component.html',
	styleUrls: ['./doctors-profile.component.scss'],
	animations: [listAnimation],
})
export class DoctorsProfileToolbarComponent implements OnInit {
	constructor(private doctorService: DoctorService) {}

	doctorCount: Observable<number> = this.doctorService.getDoctorCount()

	ngOnInit(): void {}
}
