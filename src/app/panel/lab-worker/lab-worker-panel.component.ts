import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { StartNewTestModalComponent } from "./start-new-test-modal/start-new-test-modal.component";
import { filter, switchMap, take, tap } from "rxjs/operators";
import { UsersService } from "../../shared/service/users.service";
import { TestsResultService } from "../../shared/service/tests-result.service";
import { iif, of } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lab-worker-panel',
  templateUrl: './lab-worker-panel.component.html',
  styleUrls: ['./lab-worker-panel.component.scss']
})
export class LabWorkerPanelComponent {

}
