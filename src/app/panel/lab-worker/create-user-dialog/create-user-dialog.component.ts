import { Component, Inject } from '@angular/core';
import { CreateUserFormGroup } from "./create-user-form-group";
import { Gender } from "../../../shared/api/patient-details";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { UserRoles } from "../../../shared/api/user-roles";

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent {
  form = new CreateUserFormGroup();

  genders = Gender;
  roles = UserRoles;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CreateUserData,
    private readonly dialogRef: MatDialogRef<CreateUserDialogComponent>
  ) {
    this.form.patchValue({ role: data.role })
  }

  onSave(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}

export interface CreateUserData {
  role: UserRoles;
}
