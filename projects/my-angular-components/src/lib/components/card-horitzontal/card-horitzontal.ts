import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-components-card-horitzontal',
  imports: [],
  templateUrl: './card-horitzontal.html',
  styleUrl: './card-horitzontal.css'
})
export class MyComponentsCardHoritzontal {
  @Input() image: string | undefined;
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() imageSrc?: string;  
  @Input() imageAlt: string = 'Card image';  
}
