import { Component, input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-dropdown',
  imports: [ReactiveFormsModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css'
})
export class MyComponentsDropdown {
  label = input<string>();
  placeholder = input<string>('Selecciona una opción');
  controlName = input.required<string>();
  options = input<{ value: string | number, label: string }[]>([]);

  constructor(public controlContainer: ControlContainer) { }

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName()) as FormControl;
  }
}
