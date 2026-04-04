import { Component, input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-radio-group',
  imports: [ReactiveFormsModule],
  templateUrl: './radio-group.html',
  styleUrl: './radio-group.css'
})
export class MyComponentsRadioGroup {
  controlName = input.required<string>();
  label = input.required<string>();
  options = input<{ label: string; value: any }[]>([]);
  disabled = input<boolean>(false);
  errorMessage = input<string>('Campo inválido');

  constructor(public controlContainer: ControlContainer) {}

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName()) as FormControl;
  }
}
