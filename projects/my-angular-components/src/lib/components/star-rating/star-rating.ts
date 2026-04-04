import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'my-components-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css'
})
export class MyComponentsStarRating {
  rating = input<number>(0);
  maxStars = input<number>(5);
  readonly = input<boolean>(false);
  votes = input<number>(0);

  ratingChange = output<number>();

  hoverIndex = signal<number>(0); 

  starsArray(): number[] {
    return Array(this.maxStars()).fill(0);
  }

  setRating(value: number) {
    if (!this.readonly()) {
      this.ratingChange.emit(value);
    }
  }

  setHover(index: number) {
    if (!this.readonly()) {
      this.hoverIndex.set(index);
    }
  }

  clearHover() {
    this.hoverIndex.set(0);
  }
}
