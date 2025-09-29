import { MyComponentsMessage } from './../../../../../my-angular-components/src/lib/components/message/message';
import { Component } from '@angular/core';

@Component({
  selector: 'app-message-page',
  imports: [
    MyComponentsMessage    
  ],
  templateUrl: './message-page.html',
  styleUrl: './message-page.scss'
})
export class MessagePage {

}
