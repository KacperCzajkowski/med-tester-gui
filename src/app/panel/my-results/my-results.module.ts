import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyResultsRoutingModule } from './my-results-routing.module';
import { MyResultsComponent } from './my-results.component';
import { TestsResultPreviewComponent } from './tests-result-preview/tests-result-preview.component';
import { AllResultsComponent } from './all-results/all-results.component';
import { MatTableModule } from "@angular/material/table";
import { MatExpansionModule } from "@angular/material/expansion";
import { SharedModule } from "../../shared/shared.module";
import { SingleTestResultComponent } from './tests-result-preview/single-test-result/single-test-result.component';
import { MatDividerModule } from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    MyResultsComponent,
    TestsResultPreviewComponent,
    AllResultsComponent,
    SingleTestResultComponent
  ],
    imports: [
        CommonModule,
        MyResultsRoutingModule,
        MatTableModule,
        MatExpansionModule,
        SharedModule,
        MatDividerModule,
        MatButtonModule
    ]
})
export class MyResultsModule { }
