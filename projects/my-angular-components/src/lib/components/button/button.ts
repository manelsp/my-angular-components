import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-components-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class MyComponentsButton {
  @Input() variant: 'primary' | 'secondary' | 'success' | 'error' | 'info' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() iconStart: string = '';
  @Input() iconEnd: string = '';
}
