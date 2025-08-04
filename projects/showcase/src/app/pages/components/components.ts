import { MyComponentsFooter } from './../../../../../my-angular-components/src/lib/components/footer/footer';
import { Component } from '@angular/core';
import { MyComponentsButton } from './../../../../../my-angular-components/src/lib/components/button/button';
import { MyComponentsChip } from './../../../../../my-angular-components/src/lib/components/chip/chip';
import { MyComponentsCard } from './../../../../../my-angular-components/src/lib/components/card/card';
import { Forms } from "../../components/forms/forms";


@Component({
  selector: 'app-components',
  imports: [
    MyComponentsCard,
    MyComponentsChip,
    MyComponentsButton,
    MyComponentsFooter,
    Forms
],
  templateUrl: './components.html',
  styleUrl: './components.scss'
})
export class Components {
}
