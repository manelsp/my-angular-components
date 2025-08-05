import { MyComponentsFileUpload } from './../../../../../my-angular-components/src/lib/components/file-upload/file-upload';
import { MyComponentsDatepicker } from './../../../../../my-angular-components/src/lib/components/datepicker/datepicker';
import { MyComponentsCheckbox } from './../../../../../my-angular-components/src/lib/components/checkbox/checkbox';
import { MyComponentsTextarea } from './../../../../../my-angular-components/src/lib/components/textarea/textarea';
import { MyComponentsDropdown } from './../../../../../my-angular-components/src/lib/components/dropdown/dropdown';
import { MyComponentsInputNumber } from './../../../../../my-angular-components/src/lib/components/input-number/input-number';
import { MyComponentsInput } from './../../../../../my-angular-components/src/lib/components/input/input';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MyComponentsButton } from '../../../../../my-angular-components/src/lib/components/button/button';

@Component({
  selector: 'app-forms',
  imports: [
    MyComponentsInput,
    MyComponentsInputNumber,
    MyComponentsDropdown,
    MyComponentsTextarea,
    MyComponentsCheckbox,
    MyComponentsDatepicker,
    MyComponentsFileUpload,
    MyComponentsButton,
    ReactiveFormsModule
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {
  public form!: FormGroup;
  public countryOptions = [
    { value: 'es', label: 'España' },
    { value: 'fr', label: 'Francia' },
    { value: 'it', label: 'Italia' },
  ];


  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      quantity: [1, [Validators.required, Validators.min(1), Validators.max(10)]],
      country: ['', [Validators.required]],
      description: ['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue],
      birthdate: ['', Validators.required],
      photos: [null, Validators.required]
    });
  }

  public sendForm(): void {
    console.log(this.form.value)
  }
}