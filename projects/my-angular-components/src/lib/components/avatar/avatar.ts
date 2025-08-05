import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-components-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css'
})
export class MyComponentsAvatar {
  @Input() src?: string;
  @Input() alt: string = 'Avatar';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() border: boolean = true;
  @Input() name?: string;

  get sizeClass(): string {
    return this.size;
  }

  getInitial(): string {
    if (this.name && this.name.length > 0) {
      return this.name.charAt(0).toUpperCase();
    }
    return '?';
  }
}
