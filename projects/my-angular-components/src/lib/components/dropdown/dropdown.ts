import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-dropdown',
  imports: [ReactiveFormsModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css'
})
export class MyComponentsDropdown {
  @Input() label?: string;
  @Input() placeholder: string = 'Selecciona una opción';
  @Input() controlName!: string;
  @Input() options: { value: string | number, label: string }[] = [];

  constructor(public controlContainer: ControlContainer) { }

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName) as FormControl;
  }
}
