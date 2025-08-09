import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'my-components-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class MyComponentsCard {
  @Input() image: string | undefined;
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() route?: string | undefined;
  @Input() imageSrc?: string;  
  @Input() imageAlt: string = 'Card image';  
}
