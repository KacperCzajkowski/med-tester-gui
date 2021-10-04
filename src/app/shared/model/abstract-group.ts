import { FormGroup } from '@angular/forms';

export abstract class AbstractGroup extends FormGroup{
  isValid(): boolean {
    this.markAllAsTouched();

    return this.valid;
  }
}
