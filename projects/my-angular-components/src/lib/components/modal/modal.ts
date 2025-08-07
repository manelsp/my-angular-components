import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-components-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class MyComponentsModal {
  @Input() visible = false;
  @Input() size: 'small' | 'medium' | 'large' | 'larger ' = 'medium';
  @Output() close = new EventEmitter<void>();

  public onBackdropClick(): void {
    this.close.emit();
  }
}
