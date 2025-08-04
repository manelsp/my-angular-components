import { Routes } from '@angular/router';
import { Components } from './pages/components/components';

export const routes: Routes = [
    { path:'components', component: Components },
    { path: '**', redirectTo: 'components'}
];
