import { FormControl, FormGroup, Validators } from "@angular/forms";

export class CreateUserFormGroup extends FormGroup {
  public readonly email = new FormControl('', [Validators.email, Validators.required]);
  public readonly role = new FormControl('', [Validators.required]);
  public readonly firstName = new FormControl('', [Validators.required]);
  public readonly lastName = new FormControl('', [Validators.required]);
  public readonly pesel = new FormControl('', [Validators.required]);
  public readonly gender = new FormControl('', [Validators.required]);

  constructor() {
    super({});

    this.registerControl('email', this.email);
    this.registerControl('role', this.role);
    this.registerControl('firstName', this.firstName);
    this.registerControl('lastName', this.lastName);
    this.registerControl('gender', this.gender);
    this.registerControl('pesel', this.pesel);
  }
}
