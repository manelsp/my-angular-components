import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-components-card-horitzontal',
  imports: [CommonModule],
  templateUrl: './card-horitzontal.html',
  styleUrl: './card-horitzontal.css'
})
export class MyComponentsCardHoritzontal {
  image = input<string>();
  title = input<string>();
  subtitle = input<string>();
  imageSrc = input<string>();  
  imageAlt = input<string>('Card image');  
  route = input<string>();
  size = input<'extra-small' | 'small' | 'medium' | 'large'>('medium');
}
