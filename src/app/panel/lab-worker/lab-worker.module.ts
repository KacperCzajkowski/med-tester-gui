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
import { MatExpansionModule } from "@angular/material/expansion";
import { UserDetailsModule } from "../user-details/user-details.module";
import { EditSingleTestModalComponent } from './edit-tests-result/edit-single-test-modal/edit-single-test-modal.component';
import { SingleTestResultComponent } from './edit-tests-result/single-test-result/single-test-result.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatTableModule } from "@angular/material/table";
import { AddEditIndicatorModalComponent } from './edit-tests-result/single-test-result/add-edit-indicator-modal/add-edit-indicator-modal.component';
import { AcceptRemovingTestDialogComponent } from './edit-tests-result/accept-removing-test-dialog/accept-removing-test-dialog.component';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { MatRadioModule } from "@angular/material/radio";
import { AddTemplateComponent } from './edit-tests-result/add-template/add-template.component';
import {MatSelectModule} from "@angular/material/select";


@NgModule({
    declarations: [
        LabWorkerPanelComponent,
        StartNewTestModalComponent,
        EditTestsResultComponent,
        MainPanelComponent,
        EditSingleTestModalComponent,
        SingleTestResultComponent,
        AddEditIndicatorModalComponent,
        AcceptRemovingTestDialogComponent,
        CreateUserDialogComponent,
        AddTemplateComponent
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
    SharedModule,
    MatExpansionModule,
    MatDividerModule,
    MatTableModule,
    MatRadioModule,
    MatSelectModule,
  ],
    exports: [
        SingleTestResultComponent
    ]
})
export class LabWorkerModule { }
