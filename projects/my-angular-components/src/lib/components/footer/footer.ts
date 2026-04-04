import { Component, input } from '@angular/core';

@Component({
  selector: 'my-components-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class MyComponentsFooter {
  copyright = input<string>('');
}
