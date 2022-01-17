import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyResultsComponent } from "./my-results.component";
import { TestsResultPreviewComponent } from "./tests-result-preview/tests-result-preview.component";
import { AllResultsComponent } from "./all-results/all-results.component";

const routes: Routes = [
  {
    path: '',
    component: MyResultsComponent,
    children: [
      {
        path: 'all',
        component: AllResultsComponent
      },
      {
        path: ':id',
        component: TestsResultPreviewComponent
      },
      { path: '**', redirectTo: 'all', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyResultsRoutingModule { }
