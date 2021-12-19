import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabWorkerComponent } from "./lab-worker.component";

const routes: Routes = [
  {
    path: '',
    component: LabWorkerComponent,
    children: [
      { path: 'main', component: LabWorkerComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabWorkerRoutingModule { }
