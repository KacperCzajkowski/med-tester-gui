import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'lab-worker',
        loadChildren: () => import('./lab-worker/lab-worker.module').then(m => m.LabWorkerModule),
      },
      {
        path: 'user-details',
        loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule),
      },
      { path: '', redirectTo: 'user-details', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
