import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  UserDetailsDisplayElementComponent
} from "./user-details-display-element/user-details-display-element.component";
import { MatDividerModule } from "@angular/material/divider";
import { UserDetailsKeyPipe } from './user-details-key.pipe';
import { GenderPipe } from './gender.pipe';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
  ],
  exports: [
    UserDetailsDisplayElementComponent,
    UserDetailsKeyPipe
  ],
  declarations: [
    UserDetailsDisplayElementComponent,
    UserDetailsKeyPipe,
    GenderPipe,
  ]
})
export class SharedModule { }
