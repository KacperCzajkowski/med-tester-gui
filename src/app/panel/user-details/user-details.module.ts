import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from "@angular/material/divider";
import { UserDetailsDisplayElementComponent } from './user-details-display-element/user-details-display-element.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    UserDetailsDisplayElementComponent,
    UserDetailsDisplayElementComponent
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MatExpansionModule,
    MatDividerModule
  ]
})
export class UserDetailsModule { }
