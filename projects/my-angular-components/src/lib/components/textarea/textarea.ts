import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-textarea',
  imports: [ReactiveFormsModule],
  templateUrl: './textarea.html',
  styleUrl: './textarea.css'
})
export class MyComponentsTextarea {
  @Input() controlName!: string;
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() rows: number = 4;

  constructor(public controlContainer: ControlContainer) { }

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName) as FormControl;
  }
}
