import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details-display-element',
  templateUrl: './user-details-display-element.component.html',
  styleUrls: ['./user-details-display-element.component.scss']
})
export class UserDetailsDisplayElementComponent {
  @Input() key: string = '';
  @Input() value: string = '';
}
