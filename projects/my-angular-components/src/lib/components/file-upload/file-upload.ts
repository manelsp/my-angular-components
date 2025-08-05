import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-components-file-upload',
  imports: [ReactiveFormsModule],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.css'
})
export class MyComponentsFileUpload {
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() accept: string = '';
  @Input() multiple: boolean = false;

  previews: string[] = [];

  constructor(public controlContainer: ControlContainer) { }

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName) as FormControl;
  }

  get fileName(): string | null {
    const val = this.control.value;
    if (val && !this.multiple && val.name) {
      return val.name;
    }
    return null;
  }

  get fileCount(): number {
    const val = this.control.value;
    if (val && this.multiple && Array.isArray(val)) {
      return val.length;
    }
    return 0;
  }


  public onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;

    if (!files) {
      this.control.setValue(null);
      this.previews = [];
      return;
    }

    if (this.multiple) {
      const newFiles = Array.from(files);

      const existingFiles: File[] = this.control.value ?? [];

      const allFiles = [...existingFiles, ...newFiles];

      this.control.setValue(allFiles);
      this.generatePreviews(allFiles);
    } else {
      const file = files[0];
      this.control.setValue(file);
      this.generatePreviews([file]);
    }

    this.control.markAsTouched();
    input.value = '';
  }

  public removeFile(index: number) {
    if (!this.control.value || !Array.isArray(this.control.value)) {
      return;
    }

    const currentFiles: File[] = [...this.control.value];
    currentFiles.splice(index, 1);

    this.control.setValue(currentFiles);
    this.control.markAsTouched();

    this.generatePreviews(currentFiles);
  }


  private generatePreviews(files: File[]) {
    this.previews = [];

    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = e => {
          this.previews.push(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    });
  }
}
