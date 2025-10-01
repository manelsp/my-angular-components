import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BottomNavItem } from './bottom-nav.interface';

@Component({
  selector: 'my-components-bottom-nav',
  imports: [RouterLink],
  templateUrl: './bottom-nav.html',
  styleUrl: './bottom-nav.css'
})
export class MyComponentsBottomNav {
  @Input() items: BottomNavItem[] = [];
}
