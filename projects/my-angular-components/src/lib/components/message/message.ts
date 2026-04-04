import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'my-components-message',
  imports: [CommonModule],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class MyComponentsMessage {
  type = input<'info' | 'success' | 'warning' | 'error'>('info');
  title = input<string>('');
  closable = input<boolean>(false);

  visible = signal<boolean>(true);

  public close() {
    this.visible.set(false);
  }
}
