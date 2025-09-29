import { Component } from '@angular/core';
import { MyComponentsButton } from '../../../../../my-angular-components/src/lib/components/button/button';

@Component({
  selector: 'app-button-page',
  imports: [
        MyComponentsButton,
  ],
  templateUrl: './button-page.html',
  styleUrl: './button-page.scss'
})
export class ButtonPage {

}
