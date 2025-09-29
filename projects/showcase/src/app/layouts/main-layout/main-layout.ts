import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { MyComponentsSidenav } from '../../../../../my-angular-components/src/lib/components/sidenav/sidenav';

@Component({
  selector: 'app-main-layout',
  imports: [MyComponentsSidenav, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
  public routes: { path?: string; label: string, children?: { path?: string; label: string }[]; }[] = [
    {
      label: "Forms",
      children: [
        { path: 'forms', label: 'Inputs' },
        { path: 'forms', label: 'Selector' },
        { path: 'forms', label: 'DatePicker' },
        { path: 'forms', label: 'RadioButtons' },
        { path: 'forms', label: 'TextArea' },
        { path: 'forms', label: 'Checkbox' },
        { path: 'forms', label: 'File Uploader' },
      ]
    },
    {
      label: "Button",
      children: [
        { path: 'button', label: 'Button' },
      ]
    },
    {
      label: "Data",
      children: [
        { path: 'data', label: 'Table' },
      ]
    },
    {
      label: "Panel",
      children: [
        { path: 'panel', label: 'Card' },
        { path: 'panel', label: 'Modal' },
      ]
    },
    {
      label: "Navigation",
      children: [
        { path: 'navigation', label: 'Header' },
        { path: 'navigation', label: 'Sidenav' },
        { path: 'navigation', label: 'Footer' },
      ]
    },
    { label: "Message",
        children: [
        { path: 'message', label: 'Message' },
      ]
     },
    { label: "Media",
        children: [
        { path: 'media', label: 'Image Viewer' },
      ]
     },
    {
      label: "Misc", children: [
        { path: 'misc', label: 'Chips' },
        { path: 'misc', label: 'Badges' },
        { path: 'misc', label: 'Avatars' },
        { path: 'misc', label: 'Rating' },
      ]
    }
  ]
}
