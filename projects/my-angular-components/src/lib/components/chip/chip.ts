import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-components-chip',
  imports: [CommonModule],
  templateUrl: './chip.html',
  styleUrl: './chip.css'
})
export class MyComponentsChip {
  @Input() label: string = '';
  @Input() color: 'default' | 'primary' | 'success' | 'error' = 'default';
  @Input() size: 'small' | 'default' | 'large' = 'default';
}
