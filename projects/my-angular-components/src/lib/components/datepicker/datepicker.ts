import { Component, input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-datepicker',
  imports: [ReactiveFormsModule],
  templateUrl: './datepicker.html',
  styleUrl: './datepicker.css'
})
export class MyComponentsDatepicker {
  controlName = input.required<string>();
  label = input.required<string>();
  placeholder = input<string>('');

  constructor(public controlContainer: ControlContainer) { }

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName()) as FormControl;
  }
}
