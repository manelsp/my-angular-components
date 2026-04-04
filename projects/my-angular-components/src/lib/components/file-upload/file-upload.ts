import { Component, input, signal, effect, OnInit } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-file-upload',
  imports: [ReactiveFormsModule],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.css'
})
export class MyComponentsFileUpload implements OnInit {
  controlName = input.required<string>();
  label = input.required<string>();
  accept = input<string>('');
  multiple = input<boolean>(false);

  previews = signal<string[]>([]);

  constructor(public controlContainer: ControlContainer) { }

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName()) as FormControl;
  }

  get fileCount(): number {
    const val = this.control.value;
    if (val && this.multiple() && Array.isArray(val)) {
      return val.length;
    }
    return 0;
  }

  public ngOnInit(): void {
    this.initializePreviews();
  }

  private initializePreviews(): void {
    const value = this.control?.value;

    if (value) {
      if (this.multiple() && Array.isArray(value)) {
        this.previews.set(value);
      } else if (typeof value === 'string') {
        this.previews.set([value]);
      }
    }
  }

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;

    if (!files || files.length === 0) {
      this.control.setValue(this.multiple() ? [] : null);
      this.previews.set([]);
      return;
    }

    const fileArray = Array.from(files);

    fileArray.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        const base64 = e.target?.result as string;

        if (this.multiple()) {
          const currentValues: string[] = this.control.value ?? [];
          const updatedValues = [...currentValues, base64];
          this.control.setValue(updatedValues);
          this.previews.set(updatedValues);
        } else {
          this.control.setValue(base64);
          this.previews.set([base64]);
        }

        this.control.markAsTouched();
      };
      reader.readAsDataURL(file);
    });

    input.value = '';
  }

  public removeFile(index: number): void {
    if (this.multiple()) {
      const currentValues: string[] = [...this.control.value];
      currentValues.splice(index, 1);
      this.control.setValue(currentValues);
      this.previews.set(currentValues);
    } else {
      this.control.setValue(null);
      this.previews.set([]);
    }
    this.control.markAsTouched();
  }

  private draggedIndex = signal<number | null>(null);

  public onDragStart(index: number): void {
    this.draggedIndex.set(index);
  }

  public onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  public onDrop(targetIndex: number): void {
    const draggedIdx = this.draggedIndex();
    if (draggedIdx === null || draggedIdx === targetIndex) {
      return;
    }

    const previewsCopy = [...this.previews()];
    const [movedItem] = previewsCopy.splice(draggedIdx, 1);
    previewsCopy.splice(targetIndex, 0, movedItem);
    this.previews.set(previewsCopy);

    const controlValues = Array.isArray(this.control.value) ? [...this.control.value] : [];
    const [movedValue] = controlValues.splice(draggedIdx, 1);
    controlValues.splice(targetIndex, 0, movedValue);
    this.control.setValue(controlValues);
    this.control.markAsTouched();

    this.draggedIndex.set(null);
  }
}
