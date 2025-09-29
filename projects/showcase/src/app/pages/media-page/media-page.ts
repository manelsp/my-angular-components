import { MyComponentsImageViewer } from './../../../../../my-angular-components/src/lib/components/image-viewer/image-viewer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-media-page',
  imports: [
    MyComponentsImageViewer
  ],
  templateUrl: './media-page.html',
  styleUrl: './media-page.scss'
})
export class MediaPage {

}
