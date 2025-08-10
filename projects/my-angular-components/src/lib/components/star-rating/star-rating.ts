import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-components-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css'
})
export class MyComponentsStarRating {
  @Input() rating = 0;
  @Input() maxStars = 5;
  @Input() readonly = false;
  @Input() votes = 0;

  @Output() ratingChange = new EventEmitter<number>();

  hoverIndex = 0; 

  starsArray(): number[] {
    return Array(this.maxStars).fill(0);
  }

  setRating(value: number) {
    if (!this.readonly) {
      this.rating = value;
      this.ratingChange.emit(value);
    }
  }

  setHover(index: number) {
    if (!this.readonly) {
      this.hoverIndex = index;
    }
  }

  clearHover() {
    this.hoverIndex = 0;
  }
}
