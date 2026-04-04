import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyComponentsButton } from '../../../../../my-angular-components/src/lib/components/button/button';
import { MyComponentsCheckbox } from '../../../../../my-angular-components/src/lib/components/checkbox/checkbox';
import { MyComponentsImageCheckbox } from '../../../../../my-angular-components/src/lib/components/image-checkbox/image-checkbox';
import { MyComponentsDatepicker } from '../../../../../my-angular-components/src/lib/components/datepicker/datepicker';
import { MyComponentsDropdown } from '../../../../../my-angular-components/src/lib/components/dropdown/dropdown';
import { MyComponentsFileUpload } from '../../../../../my-angular-components/src/lib/components/file-upload/file-upload';
import { MyComponentsInputNumber } from '../../../../../my-angular-components/src/lib/components/input-number/input-number';
import { MyComponentsInput } from '../../../../../my-angular-components/src/lib/components/input/input';
import { MyComponentsRadioGroup } from '../../../../../my-angular-components/src/lib/components/radio-group/radio-group';
import { MyComponentsTextarea } from '../../../../../my-angular-components/src/lib/components/textarea/textarea';

@Component({
  selector: 'app-form-page',
  imports: [
    MyComponentsInput,
    MyComponentsInputNumber,
    MyComponentsDropdown,
    MyComponentsTextarea,
    MyComponentsCheckbox,
    MyComponentsImageCheckbox,
    MyComponentsDatepicker,
    MyComponentsFileUpload,
    MyComponentsButton,
    MyComponentsRadioGroup,
    ReactiveFormsModule
  ],
  templateUrl: './form-page.html',
  styleUrl: './form-page.scss'
})
export class FormPage {
  public form!: FormGroup;
  private base64Image: string = "data:image/;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="

  public countryOptions = [
    { value: 'es', label: 'España' },
    { value: 'fr', label: 'Francia' },
    { value: 'it', label: 'Italia' },
  ];

  public supermarketOptions = [
    { value: 'mercadona', label: 'Mercadona', imageSrc: 'https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/25023219545/original/a4AatF9iPslEMP1nQcBhP1UeVFCKO__Udg.jpg?1619020919', alt: 'Mercadona logo' },
    { value: 'carrefour', label: 'Carrefour', imageSrc: 'https://www.cclasrosas.es/wp-content/uploads/2017/12/logo-carrefour.jpg', alt: 'Carrefour logo' },
    { value: 'lidl', label: 'Lidl', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lidl-Logo.svg/200px-Lidl-Logo.svg.png', alt: 'Lidl logo' },
    { value: 'dia', label: 'Día', imageSrc: 'https://www.hoyodemanzanares.es/wp-content/uploads/2020/08/dia-market-logo-500x500.png', alt: 'Día logo' },
    { value: 'alcampo', label: 'Alcampo', imageSrc: 'https://brandemia.org/sites/default/files/sites/default/files/auchan_simbolo3.jpg', alt: 'Alcampo logo' },
    { value: 'eroski', label: 'Eroski', imageSrc: 'https://images.seeklogo.com/logo-png/17/1/eroski-logo-png_seeklogo-173749.png', alt: 'Eroski logo' },
  ];

  public brandOptions = [
    { value: 'nike', label: 'Nike', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/200px-Logo_NIKE.svg.png', alt: 'Nike logo' },
    { value: 'adidas', label: 'Adidas', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/200px-Adidas_Logo.svg.png', alt: 'Adidas logo' },
    { value: 'puma', label: 'Puma', imageSrc: 'https://static.vecteezy.com/system/resources/previews/020/336/032/non_2x/puma-logo-puma-icon-free-free-vector.jpg', alt: 'Puma logo' },
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
      color: ['', Validators.required],
      photos: [[this.base64Image], Validators.required],
      supermarkets: [[], Validators.required],
      favoriteBrand: ['', Validators.required]
    });
  }

  public sendForm(): void {
    console.log(this.form.value)
  }
}
