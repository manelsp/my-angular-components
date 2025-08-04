import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-components-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class MyComponentsFooter {
  @Input() copyright: string = '';
}
