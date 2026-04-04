import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, input, ViewChild, signal, effect } from '@angular/core';

@Component({
  selector: 'my-components-image-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.css'
})
export class MyComponentsImageViewer {
  src = input<string>('');
  alt = input<string>('image');
  description = input<string>();
  zoom = input<boolean>(false);
  width = input<string>('100%');
  height = input<string>('auto');
  zoomFactor = input<number>(2);

  @ViewChild('imageRef') imageRef!: ElementRef<HTMLImageElement>;
  @ViewChild('zoomRef') zoomRef!: ElementRef<HTMLDivElement>;

  zoomVisible = signal<boolean>(false);
  zoomX = signal<number>(0);
  zoomY = signal<number>(0);
  backgroundPosition = signal<string>('0% 0%');

  constructor() {
    effect(() => {
      this.updateZoomBackground();
    });
  }

  ngAfterViewInit(): void {
    this.updateZoomBackground();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.zoom()) return;

    const image = this.imageRef.nativeElement;
    const rect = image.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const bgPos = `${percentX}% ${percentY}%`;
    this.backgroundPosition.set(bgPos);
    this.zoomX.set(e.clientX + 20);
    this.zoomY.set(e.clientY - 100);

    const zoomEl = this.zoomRef.nativeElement;
    zoomEl.style.backgroundPosition = bgPos;
    zoomEl.style.backgroundSize = `${this.zoomFactor() * 100}%`;

    this.zoomVisible.set(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.zoom()) return;
    this.zoomVisible.set(false);
  }

  private updateZoomBackground() {
    if (this.zoom() && this.zoomRef?.nativeElement) {
      const zoomEl = this.zoomRef.nativeElement;
      zoomEl.style.backgroundImage = `url('${this.src()}')`;
      zoomEl.style.backgroundSize = `${this.zoomFactor() * 100}%`;
    }
  }
}
