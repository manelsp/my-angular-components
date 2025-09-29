import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { ButtonPage } from './pages/button-page/button-page';
import { FormPage } from './pages/form-page/form-page';
import { PanelPage } from './pages/panel-page/panel-page';
import { MiscPage } from './pages/misc-page/misc-page';
import { DataPage } from './pages/data-page/data-page';
import { NavigationPage } from './pages/navigation-page/navigation-page';
import { MessagePage } from './pages/message-page/message-page';
import { MediaPage } from './pages/media-page/media-page';

export const routes: Routes = [
    {
        path: '', component: MainLayout, children: [
            { path: 'button', component: ButtonPage },
            { path: 'forms', component: FormPage },
            { path: 'panel', component: PanelPage },
            { path: 'misc', component: MiscPage },
            { path: 'data', component: DataPage },
            { path: 'navigation', component: NavigationPage },
            { path: 'message', component: MessagePage },
            { path: 'media', component: MediaPage },
            { path: '**', redirectTo: 'forms' }
        ]
    },
    { path: '**', redirectTo: '' }
];
