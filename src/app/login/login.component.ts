import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginForm } from './model/login-form';
import { LoginService } from '../shared/service/login.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new LoginForm();
  hide = true;

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {
  }

  getErrorMessage() {
    if (this.form.getEmailControl().hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.getEmailControl().hasError('email') ? 'Not a valid email' : '';
  }

  login(): void {
    if (this.form.isValid()) {
      const data = this.form.getDataAsLoginProperties();

      this.loginService.login(data).subscribe(() => this.router.navigate(['panel']));
    }
  }
}
