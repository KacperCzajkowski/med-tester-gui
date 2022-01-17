import { Component } from '@angular/core';
import { LaboratoryDetails, UserDetails, UsersService } from "../../shared/service/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  userDetails$ = this.usersService.getUserDetails();

  constructor(
    private readonly usersService: UsersService
  ) {
  }

  getUserDetails(items: UserDetails): any {
    var tmp = Object.entries(items);

    return tmp.filter((value) => value[0] !== 'labDetails');
  }

  getLabDetails(items: LaboratoryDetails): any {
    return Object.entries(items);
  }
}
