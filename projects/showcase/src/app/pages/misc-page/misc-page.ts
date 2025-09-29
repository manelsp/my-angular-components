import { MyComponentsStarRating } from './../../../../../my-angular-components/src/lib/components/star-rating/star-rating';
import { MyComponentsAvatar } from './../../../../../my-angular-components/src/lib/components/avatar/avatar';
import { MyComponentsCounterBadge } from './../../../../../my-angular-components/src/lib/components/counter-badge/counter-badge';
import { MyComponentsChip } from './../../../../../my-angular-components/src/lib/components/chip/chip';
import { Component } from '@angular/core';

@Component({
  selector: 'app-misc-page',
  imports: [
    MyComponentsChip,
    MyComponentsCounterBadge,
    MyComponentsAvatar,
    MyComponentsStarRating
  ],
  templateUrl: './misc-page.html',
  styleUrl: './misc-page.scss'
})
export class MiscPage {
public onRate(number: Number) {
    console.log('Voting:', number);
  }
}
