import {Directive, ElementRef, EventEmitter, forwardRef, HostListener, Input, Output} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator} from '@angular/forms';
import {UiCnpjPipe} from './cnpj.pipe';
import {UiElement} from '../../../providers/element.provider';

@Directive({
    selector: '[uiMaskCnpj][ngModel]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UiMaskCnpjDirective),
        multi: true
    }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => UiMaskCnpjDirective),
        multi: true
    }, UiCnpjPipe]
})
export class UiMaskCnpjDirective implements ControlValueAccessor, Validator {

    input: boolean;
    beforeSelIndex;
    onChange: Function;
    onTouched: Function;
    control: AbstractControl;
    symbolsPositions: number[] = [2, 6, 10, 15, 18];
    @Input() minDate: Date;
    @Input() maxDate: Date;
    @Input() ngModel: any;
    @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

    constructor(public elementRef: ElementRef, public cnpjPipe: UiCnpjPipe) {
    }

    writeValue(rawValue: any): void {
        if (!this.input) {
            this.elementRef.nativeElement.value = this.cnpjPipe.transform(this.ngModel);
        }
        this.input = false;
    }

    renderViaInput(rawValue: any): void {
        this.ngModel = this.formart(rawValue);
        this.ngModelChange.emit(this.ngModel);
        this.elementRef.nativeElement.value = this.cnpjPipe.transform(this.elementRef.nativeElement.value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    formart(value) {
        value = value.toString().replace(/[^0-9]+/g, '');
        return value.substring(0, 14);
    }

    validate(control: AbstractControl): { [key: string]: any } {

        this.control = control;

        if (control.value && this.formart(control.value).length < 14) {
            return { parse: true };
        }

        return null;
    }

    @HostListener('keydown') onKeydown() {
        this.beforeSelIndex = UiElement.caretPosition.get(this.elementRef.nativeElement);
    }

    @HostListener('input', ['$event']) onInput($event): void {
        const afterSelIndex = UiElement.caretPosition.get(this.elementRef.nativeElement);
        const rawValue: string = this.elementRef.nativeElement.value;
        this.input = true;
        this.renderViaInput(rawValue);
        UiElement.caretPosition.set(this.elementRef.nativeElement, this.beforeSelIndex, afterSelIndex, this.symbolsPositions);
    }

}
