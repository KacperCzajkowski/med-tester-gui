import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from "./api/patient-details";

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  genderMap = new Map([
    [Gender.MALE, 'Mężczyzna'],
    [Gender.FEMALE, 'Kobieta'],
  ]);

  transform(value: unknown, ...args: unknown[]): string {
    return this.genderMap.get(value as Gender) ?? '';
  }

}
