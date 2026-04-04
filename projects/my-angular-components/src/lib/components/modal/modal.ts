import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'my-components-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class MyComponentsModal {
  visible = input<boolean>(false);
  size = input<'small' | 'medium' | 'large' | 'larger '>('medium');
  close = output<void>();

  public onBackdropClick(): void {
    this.close.emit();
  }
}
