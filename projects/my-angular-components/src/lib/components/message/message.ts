import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-components-message',
  imports: [CommonModule],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class MyComponentsMessage {
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() title: string = '';
  @Input() closable: boolean = false;

  public visible = true;

  public close() {
    this.visible = false;
  }
}
