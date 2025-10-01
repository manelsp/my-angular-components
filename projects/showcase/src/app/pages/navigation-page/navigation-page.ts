import { MyComponentsBottomNav } from './../../../../../my-angular-components/src/lib/components/bottom-nav/bottom-nav';
import { MyComponentsFooter } from './../../../../../my-angular-components/src/lib/components/footer/footer';
import { MyComponentsButton } from '../../../../../my-angular-components/src/lib/components/button/button';
import { MyComponentsModal } from '../../../../../my-angular-components/src/lib/components/modal/modal';
import { MyComponentsSidenav } from '../../../../../my-angular-components/src/lib/components/sidenav/sidenav';
import { MyComponentsHeader } from './../../../../../my-angular-components/src/lib/components/header/header';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-page',
  imports: [
    MyComponentsHeader,
    MyComponentsSidenav,
    MyComponentsModal,
    MyComponentsFooter,
    MyComponentsButton,
    MyComponentsBottomNav
  ],
  templateUrl: './navigation-page.html',
  styleUrl: './navigation-page.scss'
})
export class NavigationPage {
  public showHeader : boolean = false;
  public showSidenav : boolean = false;
  public showBottomnav : boolean = false;

  public openedSidenav : boolean = false;
}
