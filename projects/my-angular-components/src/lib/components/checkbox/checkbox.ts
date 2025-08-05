import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-checkbox',
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css'
})
export class MyComponentsCheckbox {
  @Input() controlName!: string;
  @Input() label!: string;

  constructor(public controlContainer: ControlContainer) { }

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName) as FormControl;
  }
}
