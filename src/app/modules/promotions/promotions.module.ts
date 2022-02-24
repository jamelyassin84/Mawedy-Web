import { SharedModule } from './../shared/shared.module'
import { NgModule } from '@angular/core'
import { PromotionsComponent } from './promotions/promotions.component'
import { PromotionsToolbarComponent } from 'src/app/modules/shared/toolbars/promotions-toolbar/promotions-toolbar.component'
import { PromotionsEditComponent } from './promotions-edit/promotions-edit.component'
import { PromotionsAddComponent } from './promotions-add/promotions-add.component'

@NgModule({
	declarations: [
		PromotionsComponent,
		PromotionsEditComponent,
		PromotionsAddComponent,
	],
	imports: [SharedModule],
	exports: [],
})
export class PromotionsModule {}
