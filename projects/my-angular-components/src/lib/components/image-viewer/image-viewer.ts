import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'my-components-image-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.css'
})
export class MyComponentsImageViewer {
  private _src: string = '';

  @Input()
  set src(value: string) {
    this._src = value;
    this.updateZoomBackground();
  }

  get src(): string {
    return this._src;
  }

  @Input() alt: string = 'image';
  @Input() description?: string;
  @Input() zoom: boolean = false;
  @Input() width: string = '100%';
  @Input() height: string = 'auto';
  @Input() zoomFactor: number = 2;

  @ViewChild('imageRef') imageRef!: ElementRef<HTMLImageElement>;
  @ViewChild('zoomRef') zoomRef!: ElementRef<HTMLDivElement>;

  zoomVisible = false;
  zoomX = 0;
  zoomY = 0;
  backgroundPosition = '0% 0%';

  ngAfterViewInit(): void {
    this.updateZoomBackground();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.zoom) return;

    const image = this.imageRef.nativeElement;
    const rect = image.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    this.backgroundPosition = `${percentX}% ${percentY}%`;
    this.zoomX = e.clientX + 20;
    this.zoomY = e.clientY - 100;

    const zoomEl = this.zoomRef.nativeElement;
    zoomEl.style.backgroundPosition = this.backgroundPosition;
    zoomEl.style.backgroundSize = `${this.zoomFactor * 100}%`;

    this.zoomVisible = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.zoom) return;
    this.zoomVisible = false;
  }

  private updateZoomBackground() {
    if (this.zoom && this.zoomRef?.nativeElement) {
      const zoomEl = this.zoomRef.nativeElement;
      zoomEl.style.backgroundImage = `url('${this._src}')`;
      zoomEl.style.backgroundSize = `${this.zoomFactor * 100}%`;
    }
  }
}
