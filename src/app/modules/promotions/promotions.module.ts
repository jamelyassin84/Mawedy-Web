import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PromotionsComponent } from './promotions/promotions.component'
import { RouterModule } from '@angular/router'
import { PromotionsToolbarComponent } from 'src/app/components/toolbars/promotions-toolbar/promotions-toolbar.component'
import { DashboardModule } from '../dashboard/dashboard.module'
import { AppRoutingModule } from 'src/app/app-routing.module'

@NgModule({
	declarations: [PromotionsComponent, PromotionsToolbarComponent],
	imports: [CommonModule, DashboardModule, AppRoutingModule, RouterModule],
	exports: [PromotionsToolbarComponent],
})
export class PromotionsModule {}
