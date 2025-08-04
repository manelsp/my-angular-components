import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-components-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class MyComponentsCard {
  @Input() image: string | undefined;
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() imageSrc?: string;  
  @Input() imageAlt: string = 'Card image';  
}
