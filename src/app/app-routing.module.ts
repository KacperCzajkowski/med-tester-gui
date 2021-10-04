import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/service/logged-in.guard';
import { NotLoggedInGuard } from './shared/service/not-logged-in.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard] },
  {
    path: 'panel',
    loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule),
    canActivate: [LoggedInGuard],
    data: { preload: true }
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
