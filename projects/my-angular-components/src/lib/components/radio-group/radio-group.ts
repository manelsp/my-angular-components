import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-radio-group',
  imports: [ReactiveFormsModule],
  templateUrl: './radio-group.html',
  styleUrl: './radio-group.css'
})
export class MyComponentsRadioGroup {
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() options: { label: string; value: any }[] = [];
  @Input() disabled = false;
  @Input() errorMessage = 'Campo inválido';

  constructor(public controlContainer: ControlContainer) {}

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName) as FormControl;
  }
}
