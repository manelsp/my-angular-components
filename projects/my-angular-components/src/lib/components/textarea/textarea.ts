import { Component, input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-textarea',
  imports: [ReactiveFormsModule],
  templateUrl: './textarea.html',
  styleUrl: './textarea.css'
})
export class MyComponentsTextarea {
  controlName = input.required<string>();
  label = input<string>();
  placeholder = input<string>('');
  rows = input<number>(4);

  constructor(public controlContainer: ControlContainer) { }

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName()) as FormControl;
  }
}
