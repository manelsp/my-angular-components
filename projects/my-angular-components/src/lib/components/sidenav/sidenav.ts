import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'my-components-sidenav',
  imports: [RouterLink, CommonModule ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css'
})
export class MyComponentsSidenav {
  @Input() isOpen = false;
  @Input() title : string = "Menú";
  @Input() routes: { path?: string; label: string, children?: { path?: string; label: string }[]; }[] = [];

  @Output() closed = new EventEmitter<void>();

  public close() {
    this.closed.emit();
  }
}
