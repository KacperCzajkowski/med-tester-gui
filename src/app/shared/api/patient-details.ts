export interface PatientDetails {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  pesel: string;
  gender: Gender;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

