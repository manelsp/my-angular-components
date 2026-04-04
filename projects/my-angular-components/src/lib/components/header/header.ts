import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'my-components-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class MyComponentsHeader {
  logoSrc = input<string>('');
  routes = input<{ path: string; label: string }[]>([]);

  menuOpen = signal<boolean>(false);
  
  public toggleMenu(): void {
    this.menuOpen.update(value => !value);
  }

  public closeMenu(): void {
    this.menuOpen.set(false);
  }
}
