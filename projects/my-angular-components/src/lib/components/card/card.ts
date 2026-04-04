import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'my-components-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class MyComponentsCard {
  image = input<string>();
  title = input<string>();
  subtitle = input<string>();
  route = input<string>();
  imageSrc = input<string>();  
  imageAlt = input<string>('Card image');  
}
