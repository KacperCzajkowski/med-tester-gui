import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from "@angular/material/divider";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MatExpansionModule,
    MatDividerModule,
    SharedModule
  ]
})
export class UserDetailsModule { }
