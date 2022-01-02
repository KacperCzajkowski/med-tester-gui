import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userDetailsKey'
})
export class UserDetailsKeyPipe implements PipeTransform {
  keysMap = new Map([
    ['id', 'Identyfikator'],
    ['firstName', 'Imię'],
    ['lastName', 'Nazwisko'],
    ['email', 'Email'],
    ['pesel', 'Pesel'],
    ['gender', 'Płeć'],
  ]);

  transform(value: unknown, ...args: unknown[]): string {
    return this.keysMap.get(value as string) ?? value as string;
  }
}
