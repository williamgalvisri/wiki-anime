import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'animes',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    },
    {
        path: '',
        redirectTo: 'animes',
        pathMatch: 'full'
    }
];
