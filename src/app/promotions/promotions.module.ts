import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PromotionsComponent } from './promotions/promotions.component'
import { DashboardModule } from '../dashboard/dashboard.module'
import { PromotionsToolbarComponent } from '../toolbars/promotions-toolbar/promotions-toolbar.component'
import { AppRoutingModule } from '../app-routing.module'
import { RouterModule } from '@angular/router'

@NgModule({
	declarations: [PromotionsComponent, PromotionsToolbarComponent],
	imports: [CommonModule, DashboardModule, AppRoutingModule, RouterModule],
	exports: [PromotionsToolbarComponent],
})
export class PromotionsModule {}
