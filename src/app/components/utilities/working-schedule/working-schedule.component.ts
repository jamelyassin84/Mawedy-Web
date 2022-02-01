import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ClinicDoctorWorkingSchedule } from 'src/app/models/types'

@Component({
	selector: 'DoctorWorkingSchedule',
	templateUrl: './working-schedule.component.html',
	styleUrls: ['./working-schedule.component.scss'],
})
export class WorkingScheduleComponent implements OnInit {
	constructor() {}

	@Input() workingSchedules: ClinicDoctorWorkingSchedule[] = []
	@Output() onToggle = new EventEmitter<null>()
	@Output() onChange = new EventEmitter<ClinicDoctorWorkingSchedule[]>()

	ngOnInit(): void {}

	change(index: number) {
		this.workingSchedules[index].isActive =
			this.workingSchedules[index].isActive === true ? false : true
		this.onToggle.emit()
		this.onChange.emit(this.workingSchedules)
	}
}
