import { NgModule } from '@angular/core'
import { FeatherModule } from 'angular-feather'

import {
	Home,
	Users,
	Mail,
	Bell,
	ChevronDown,
	Search,
	Check,
	User,
	Inbox,
	ChevronRight,
	ChevronLeft,
	ArrowLeft,
	ArrowRight,
	AlignRight,
	Menu,
} from 'angular-feather/icons'

const icons = {
	Home,
	Users,
	User,
	Mail,
	ArrowRight,
	Bell,
	ChevronDown,
	Search,
	ArrowLeft,
	Check,
	Inbox,
	ChevronLeft,
	ChevronRight,
	AlignRight,
	Menu,
}

@NgModule({
	imports: [FeatherModule.pick(icons)],
	exports: [FeatherModule],
})
export class IconsModule {}
