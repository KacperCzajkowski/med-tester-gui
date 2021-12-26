import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabWorkerPanelComponent } from "./lab-worker-panel.component";
import { EditTestsResultComponent } from "./edit-tests-result/edit-tests-result.component";
import { MainPanelComponent } from "./main-panel/main-panel.component";

const routes: Routes = [
  {
    path: '',
    component: LabWorkerPanelComponent,
    children: [
      {
        path: 'main',
        component: MainPanelComponent
      },
      {
        path: 'edit',
        component: EditTestsResultComponent
      },
      { path: '**', redirectTo: 'main', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabWorkerRoutingModule { }
