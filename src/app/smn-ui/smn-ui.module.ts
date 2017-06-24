import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {UiInputContainerComponent} from './input/input-container.component';
import {UiInputDirective} from './input/input.directive';
import {UiToolbarComponent} from './toolbar/toolbar.component';
import {UiOptionComponent} from './selection-control/option/option.component';
import {UiSwitchComponent} from './selection-control/switch/switch.component';
import {UiMaxlengthDirective} from './format/validators/maxlength.directive';
import {UiCalendarComponent} from './calendar/calendar.component';
import {UiCalendarContentComponent} from './calendar/calendar-content.component';
import {UiAddCalendarDirective} from './calendar/add-calendar.directive';
import {UiMainMenuComponent} from './main-menu/main-menu.component';
import {UiMenuListComponent} from './main-menu/menu-list/menu-list.component';
import {UiMenuItemComponent} from './main-menu/menu-item/menu-item.component';
import {UiNavDrawerComponent} from './nav-drawer/nav-drawer.component';
import {UiDatetimeService} from './calendar/datetime.service';
import {UiCapitalizePipe} from './utils/pipes/capitalize.pipe';
import {UiRippleDirective} from './ripple/ripple.directive';
import {UiDatepickerDirective} from './datepicker/datepicker.directive';
import {UiDatepickerCallerDirective} from './datepicker/datepicker-caller.directive';
import {UiReferencesService} from './datepicker/references.service';
import './button/button.component';
import {UiPhonePipe} from './utils/pipes/phone.pipe';
export {UiPhonePipe};
import {UiDataTableOrderByDirective} from './data-table/order-by.directive';

import {UiCookie} from './providers/cookie.provider';
import {UiToolbarService} from './toolbar/toolbar.service';
import {UiElement} from './providers/element.provider';
import {UiWindowRef} from './providers/window.provider';

export {UiCookie, UiToolbarService, UiElement, UiWindowRef}

const lib: any[] = [
    UiInputContainerComponent,
    UiInputDirective,
    UiToolbarComponent,
    UiMaxlengthDirective,
    UiCalendarComponent,
    UiOptionComponent,
    UiSwitchComponent,
    UiCalendarContentComponent,
    UiAddCalendarDirective,
    UiMainMenuComponent,
    UiMenuListComponent,
    UiMenuItemComponent,
    UiCapitalizePipe,
    UiNavDrawerComponent,
    UiRippleDirective,
    UiDatepickerDirective,
    UiDatepickerCallerDirective,
    UiPhonePipe,
    UiDataTableOrderByDirective
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [...lib],
    exports: [...lib],
    providers: [
        UiReferencesService,
        UiWindowRef,
        UiDatetimeService,
        UiElement
    ],
    entryComponents: [UiCalendarComponent, UiCalendarContentComponent]
})
export class SMNUIModule {
}
