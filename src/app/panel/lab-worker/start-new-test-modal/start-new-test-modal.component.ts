import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { switchMap, take, takeUntil, tap } from "rxjs/operators";
import { UsersService } from "../../../shared/service/users.service";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { BasicUserInfo } from "../../../shared/model/basic-user-info";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-start-new-test-modal',
  templateUrl: './start-new-test-modal.component.html',
  styleUrls: ['./start-new-test-modal.component.scss']
})
export class StartNewTestModalComponent implements OnInit, OnDestroy {
  control = new FormControl('', [Validators.required, Validators.minLength(11)]);

  filteredUsers$ = new BehaviorSubject<BasicUserInfo[]>([]);

  destroy$ = new Subject<boolean>();

  constructor(
    private readonly usersService: UsersService,
    public dialogRef: MatDialogRef<StartNewTestModalComponent>,
  ) { }

  ngOnInit(): void {
    this.usersService.getUsersByQuery('').pipe(take(1))
      .subscribe(value => this.filteredUsers$.next(value));

    this.control.valueChanges.pipe(
      switchMap(value => this.usersService.getUsersByQuery(value)),
      takeUntil(this.destroy$),
    ).subscribe(value => this.filteredUsers$.next(value));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  createLabForUser(): void {
    this.dialogRef.close(this.control.value);
  }
}
