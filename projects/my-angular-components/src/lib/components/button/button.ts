import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'my-components-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class MyComponentsButton {
  variant = input<'primary' | 'secondary' | 'success' | 'error' | 'neutral'>('primary');
  size = input<'small' | 'medium' | 'large'>('medium');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  iconStart = input<string>('');
  iconEnd = input<string>('');
}
