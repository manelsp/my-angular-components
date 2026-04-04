import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-components-card',
  imports: [RouterLink, CommonModule],
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
  size = input<'extra-small' | 'small' | 'medium' | 'large'>('medium');
}
