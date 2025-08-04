import { MyComponentsInputNumber } from './../../../../../my-angular-components/src/lib/components/input-number/input-number';
import { MyComponentsInput } from './../../../../../my-angular-components/src/lib/components/input/input';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [
    MyComponentsInput,
    MyComponentsInputNumber,
    ReactiveFormsModule 
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {
form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      quantity: [1, [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }
}