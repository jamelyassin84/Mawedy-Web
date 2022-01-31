import { Component, OnInit } from '@angular/core'
import { DropdownService } from 'src/app/services/utilities/dropdown.service'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor(private service: DropdownService) {}

	ngOnInit(): void {}

	closeDropDown() {
		this.service.setShowing(false)
	}
}
