import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
      path:'login',
      component:LoginFormComponent
    },
    {
      path: 'about',
      loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'contact',
      loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
      canActivate: [AuthGuard],
    },
    {
      path: '',
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
      canActivate: [AuthGuard],
    },
];
  