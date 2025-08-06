import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-file-upload',
  imports: [ReactiveFormsModule],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.css'
})
export class MyComponentsFileUpload implements OnInit, OnChanges {
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() accept: string = '';
  @Input() multiple: boolean = false;

  previews: string[] = [];

  constructor(public controlContainer: ControlContainer) { }

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName) as FormControl;
  }

  public ngOnInit(): void {
    this.initializePreviews();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['controlName']) {
      this.initializePreviews();
    }
  }

  private initializePreviews(): void {
    const value = this.control?.value;

    if (value) {
      if (this.multiple && Array.isArray(value)) {
        this.previews = value;
      } else if (typeof value === 'string') {
        this.previews = [value];
      }
    }
  }

  get fileCount(): number {
    const val = this.control.value;
    if (val && this.multiple && Array.isArray(val)) {
      return val.length;
    }
    return 0;
  }

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;

    if (!files || files.length === 0) {
      this.control.setValue(this.multiple ? [] : null);
      this.previews = [];
      return;
    }

    const fileArray = Array.from(files);

    fileArray.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        const base64 = e.target?.result as string;

        if (this.multiple) {
          const currentValues: string[] = this.control.value ?? [];
          const updatedValues = [...currentValues, base64];
          this.control.setValue(updatedValues);
          this.previews = updatedValues;
        } else {
          this.control.setValue(base64);
          this.previews = [base64];
        }

        this.control.markAsTouched();
      };
      reader.readAsDataURL(file);
    });

    input.value = '';
  }

  public removeFile(index: number): void {
    if (this.multiple) {
      const currentValues: string[] = [...this.control.value];
      currentValues.splice(index, 1);
      this.control.setValue(currentValues);
      this.previews = currentValues;
    } else {
      this.control.setValue(null);
      this.previews = [];
    }
    this.control.markAsTouched();
  }

  private draggedIndex: number | null = null;

  public onDragStart(index: number): void {
    this.draggedIndex = index;
  }

  public onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  public onDrop(targetIndex: number): void {
    if (this.draggedIndex === null || this.draggedIndex === targetIndex) {
      return;
    }

    const previewsCopy = [...this.previews];
    const [movedItem] = previewsCopy.splice(this.draggedIndex, 1);
    previewsCopy.splice(targetIndex, 0, movedItem);
    this.previews = previewsCopy;

    const controlValues = Array.isArray(this.control.value) ? [...this.control.value] : [];
    const [movedValue] = controlValues.splice(this.draggedIndex, 1);
    controlValues.splice(targetIndex, 0, movedValue);
    this.control.setValue(controlValues);
    this.control.markAsTouched();

    this.draggedIndex = null;
  }
}
