import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-input',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class MyComponentsInput {
  label = input.required<string>();
  placeholder = input<string>('');
  type = input<string>('text');
  controlName = input.required<string>();
  autocomplete = input<undefined | 'name' | 'fullName' | 'firstName' | 'givenName' | 'middleName' | 'lastName' | 'surname' | 'postal-code' | 'familyName' | 'email' | 'phone' | 'tel' | 'phoneNumber' | 'username' | 'password' | 'address' | 'streetAddress' | 'city' | 'province' | 'state' | 'postalCode' | 'zip' | 'country' | 'birthdate'>();
  variant = input<'primary' | 'secondary' | 'neutral'>('primary');

  constructor(public controlContainer: ControlContainer) {}

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName()) as FormControl;
  }
}
