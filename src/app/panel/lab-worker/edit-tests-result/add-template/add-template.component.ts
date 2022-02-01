import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TestTemplate} from "../../../../shared/service/test-template.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.scss']
})
export class AddTemplateComponent {
  control = new FormControl('', Validators.required);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TestTemplate[],
    private readonly dialogRef: MatDialogRef<AddTemplateComponent>)
  {
  }

  submit(): void {
    if (!this.control.valid) {
      return;
    }

    this.dialogRef.close(this.control.value);
  }
}
