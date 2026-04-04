import { Component, input } from '@angular/core';

@Component({
  selector: 'my-components-counter-badge',
  imports: [],
  templateUrl: './counter-badge.html',
  styleUrl: './counter-badge.css'
})
export class MyComponentsCounterBadge {
  count = input<number | null>(null);
  maxCount = input<number>(99);
}
