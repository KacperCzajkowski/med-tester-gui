import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginForm } from './model/login-form';
import { LoginService } from '../shared/service/login.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  form = new LoginForm();
  // hide = true;
  togglePasswordSubject$ = new BehaviorSubject<boolean>(true);

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {
  }

  login(): void {
    if (this.form.isValid()) {
      const data = this.form.getDataAsLoginProperties();

      //todo adding exception handling
      this.loginService.login(data).subscribe(() => this.router.navigate(['panel']));
    }
  }

  togglePassword(): void {
    this.togglePasswordSubject$.pipe(take(1)).subscribe(value => this.togglePasswordSubject$.next(!value));
  }
}
