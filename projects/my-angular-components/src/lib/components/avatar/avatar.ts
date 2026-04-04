import { CommonModule } from '@angular/common';
import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'my-components-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css'
})
export class MyComponentsAvatar {
  src = input<string>();
  alt = input<string>('Avatar');
  size = input<'small' | 'medium' | 'large'>('medium');
  border = input<boolean>(true);
  name = input<string>();
  color = input<string>();     
  textColor = input<string>(); 

  sizeClass = computed(() => this.size());

  getInitial = computed(() => {
    const nameValue = this.name();
    if (nameValue && nameValue.length > 0) {
      return nameValue.charAt(0).toUpperCase();
    }
    return '?';
  });
}
