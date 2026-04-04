import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'my-components-sidenav',
  imports: [RouterLink, CommonModule ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css'
})
export class MyComponentsSidenav {
  isOpen = input<boolean>(false);
  title = input<string>("Menú");
  routes = input<{ path?: string; label: string, children?: { path?: string; label: string }[]; }[]>([]);

  closed = output<void>();

  public close() {
    this.closed.emit();
  }
}
