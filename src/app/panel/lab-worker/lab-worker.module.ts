import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabWorkerRoutingModule } from './lab-worker-routing.module';
import { LabWorkerPanelComponent } from './lab-worker-panel.component';
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { StartNewTestModalComponent } from './start-new-test-modal/start-new-test-modal.component';
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatOptionModule } from "@angular/material/core";
import { ReactiveFormsModule } from "@angular/forms";
import { EditTestsResultComponent } from './edit-tests-result/edit-tests-result.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    LabWorkerPanelComponent,
    StartNewTestModalComponent,
    EditTestsResultComponent,
    MainPanelComponent
  ],
  imports: [
    CommonModule,
    LabWorkerRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class LabWorkerModule { }
