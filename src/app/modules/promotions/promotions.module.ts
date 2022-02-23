import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PromotionsComponent } from './promotions/promotions.component'
import { RouterModule } from '@angular/router'
import { PromotionsToolbarComponent } from 'src/app/components/toolbars/promotions-toolbar/promotions-toolbar.component'
import { DashboardModule } from '../dashboard/dashboard.module'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { IconsModule } from '../icon/icon.module'
import { AppointmentsModule } from '../appointments/appointments.module';
import { PromotionsEditComponent } from './promotions-edit/promotions-edit.component';
import { PromotionsAddComponent } from './promotions-add/promotions-add.component'

@NgModule({
	declarations: [PromotionsComponent, PromotionsToolbarComponent, PromotionsEditComponent, PromotionsAddComponent],
	imports: [
		CommonModule,
		AppRoutingModule,
		RouterModule,
		IconsModule,
		AppointmentsModule,
	],
	exports: [PromotionsToolbarComponent],
})
export class PromotionsModule {}
