import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-components-counter-badge',
  imports: [],
  templateUrl: './counter-badge.html',
  styleUrl: './counter-badge.css'
})
export class MyComponentsCounterBadge {
  @Input() count: number | null = null;
  @Input() maxCount: number = 99;
}
