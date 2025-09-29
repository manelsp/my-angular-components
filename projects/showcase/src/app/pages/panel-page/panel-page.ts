import { MyComponentsModal } from './../../../../../my-angular-components/src/lib/components/modal/modal';
import { MyComponentsCardHoritzontal } from './../../../../../my-angular-components/src/lib/components/card-horitzontal/card-horitzontal';
import { MyComponentsCard } from './../../../../../my-angular-components/src/lib/components/card/card';
import { Component } from '@angular/core';
import { MyComponentsButton } from '../../../../../my-angular-components/src/lib/components/button/button';

@Component({
  selector: 'app-panel-page',
  imports: [
    MyComponentsCard,
    MyComponentsCardHoritzontal,
    MyComponentsModal,
    MyComponentsButton
  ],
  templateUrl: './panel-page.html',
  styleUrl: './panel-page.scss'
})
export class PanelPage {
  public showModal : boolean = false;
}
