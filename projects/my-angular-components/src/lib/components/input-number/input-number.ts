import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-input-number',
  imports: [ReactiveFormsModule],
  templateUrl: './input-number.html',
  styleUrl: './input-number.css'
})
export class MyComponentsInputNumber {
@Input() label?: string;
  @Input() placeholder: string = '';
  @Input() min?: number;
  @Input() max?: number;
  @Input() controlName!: string;

  constructor(public controlContainer: ControlContainer) {}

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName) as FormControl;
  }

  public onInputChange(event: Event) {
    let input = (event.target as HTMLInputElement).value;
    input = input.replace(/[^0-9.-]/g, '');
    const parts = input.split('.');
    if (parts.length > 2) {
      input = parts[0] + '.' + parts.slice(1).join('');
    }
    if (input.indexOf('-') > 0) {
      input = input.replace(/-/g, '');
    }

    this.control.setValue(input, { emitEvent: false });
  }
}