import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/service/login.service';
import { Router } from '@angular/router';
import { catchError, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) { }

  logout(): void {
    this.loginService.logout().pipe(
      take(1),
      tap(() => this.router.navigate(['login'])),
      catchError(() => this.router.navigate(['login']))
    ).subscribe();
  }
}
