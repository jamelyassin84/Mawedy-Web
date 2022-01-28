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
	UploadCloud,
	Upload,
	LogIn,
	Image,
	Activity,
	PlusCircle,
	Info,
	Clipboard,
	MinusCircle,
	Plus,
} from 'angular-feather/icons'

const icons = {
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
	UploadCloud,
	Upload,
	LogIn,
	Image,
	Activity,
	PlusCircle,
	Info,
	Clipboard,
	MinusCircle,
	Plus,
}

@NgModule({
	imports: [FeatherModule.pick(icons)],
	exports: [FeatherModule],
})
export class IconsModule {}
