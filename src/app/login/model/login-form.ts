import { AbstractGroup } from '../../shared/model/abstract-group';
import { FormControl, Validators } from '@angular/forms';
import { LoginProperties } from '../../shared/model/login-properties';

export class LoginForm extends AbstractGroup {
  private email = new FormControl('', [Validators.required, Validators.email]);
  private password =  new FormControl('', Validators.required);

  constructor() {
    super({});

    this.registerControl('email', this.email);
    this.registerControl('password', this.password);
  }

  getEmailControl(): FormControl {
    return this.email;
  }

  hasEmailRequiredError(): boolean {
    return this.email.errors?.required;
  }

  hasEmailValidationError(): boolean {
    return this.email.errors?.email;
  }

  getPasswordControl(): FormControl {
    return this.password;
  }

  hasPasswordRequiredError(): boolean {
    return this.password.errors?.required;
  }

  getDataAsLoginProperties(): LoginProperties {
    return {
      username: this.email.value,
      password: this.password.value
    };
  }
}
