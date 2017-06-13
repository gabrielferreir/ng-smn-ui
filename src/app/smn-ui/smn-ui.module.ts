import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {UiInputContainerComponent} from './input/input-container.component';
import {UiInputDirective} from './input/input.directive';
import {UiToolbarComponent} from './toolbar/toolbar.component';
import {UiOptionComponent} from './selection-control/option/option.component';
import {UiMaxlengthDirective} from './format/validators/maxlength.directive';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {CalendarComponent} from './calendar/calendar.component';

const lib: any[] = [
    UiInputContainerComponent,
    UiInputDirective,
    UiToolbarComponent,
    UiMaxlengthDirective,
    CalendarComponent,
    DatepickerComponent,
    UiOptionComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [...lib],
    exports: [...lib]
})
export class SMNUIModule {
}
