import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'my-components-chip',
  imports: [CommonModule],
  templateUrl: './chip.html',
  styleUrl: './chip.css'
})
export class MyComponentsChip {
  label = input<string>('');
  color = input<'default' | 'primary' | 'success' | 'error'>('default');
  size = input<'small' | 'default' | 'large'>('default');
}
