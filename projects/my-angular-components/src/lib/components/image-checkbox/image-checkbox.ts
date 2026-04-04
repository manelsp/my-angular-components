import { Component, input } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface ImageCheckboxOption {
  value: any;
  imageSrc: string;
  label?: string;
  alt?: string;
}

@Component({
  selector: 'my-components-image-checkbox',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './image-checkbox.html',
  styleUrl: './image-checkbox.css'
})
export class MyComponentsImageCheckbox {
  controlName = input.required<string>();
  options = input<ImageCheckboxOption[]>([]);
  size = input<'small' | 'medium' | 'large'>('medium');
  multiple = input<boolean>(true);

  constructor(public controlContainer: ControlContainer) { }

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName()) as FormControl;
  }

  isSelected(value: any): boolean {
    const currentValue = this.control.value;
    if (this.multiple()) {
      return Array.isArray(currentValue) && currentValue.includes(value);
    }
    return currentValue === value;
  }

  toggleSelection(value: any): void {
    const currentValue = this.control.value;

    if (this.multiple()) {
      const newValue = Array.isArray(currentValue) ? [...currentValue] : [];
      const index = newValue.indexOf(value);
      
      if (index > -1) {
        newValue.splice(index, 1);
      } else {
        newValue.push(value);
      }
      
      this.control.setValue(newValue);
    } else {
      this.control.setValue(currentValue === value ? null : value);
    }
    
    this.control.markAsTouched();
  }
}
