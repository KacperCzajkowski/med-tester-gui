import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-add-single-test-modal',
  templateUrl: './add-single-test-modal.component.html',
  styleUrls: ['./add-single-test-modal.component.scss']
})
export class AddSingleTestModalComponent implements OnInit {
  name = new FormControl('', Validators.required);
  icdCode = new FormControl('', Validators.required);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SingleTestDialogData,
    private readonly dialogRef: MatDialogRef<AddSingleTestModalComponent>)
  {
  }

  statuses = SingleTestDialogStatus;

  returnValue(): void {
    if (this.name.valid && this.icdCode.valid) {
      this.dialogRef.close({
          name: this.name.value,
          icdCode: this.icdCode.value
        } as SingleTestDialogData
      );
    }
  }

  ngOnInit(): void {
    this.name.patchValue(this.data.name);
    this.icdCode.patchValue(this.data.icdCode);
  }
}

export interface SingleTestDialogData {
  name: string;
  icdCode: string;
  status: SingleTestDialogStatus
}

export enum SingleTestDialogStatus {
  Add = 'Dodaj',
  Edit = 'Edytuj'
}
