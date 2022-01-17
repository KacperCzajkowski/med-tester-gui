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
    ['createdAt', 'Utworzony dnia'],
    ['updatedAt', 'Ostatnio aktualizowany dnia'],
    ['laboratoryId', 'Identyfikator laboratorium'],
    ['laboratoryName', 'Nazwa laboratorium'],
    ['laboratoryCreatedAt', 'Stworzone dnia'],
    ['labWorkerId', 'Identyfikator osoby wystawiającej'],
    ['fullName', 'Imię i nazwisko'],
    ['labName', 'Nazwa laboratorium'],
    ['labId', 'Identyfikator laboratorium']
  ]);

  transform(value: unknown, ...args: unknown[]): string {
    return this.keysMap.get(value as string) ?? value as string;
  }
}
