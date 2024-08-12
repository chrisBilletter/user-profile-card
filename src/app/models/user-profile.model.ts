import { FormGroup } from '@angular/forms';

export interface User {
  address: Address;
  dob: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface Address {
  homeAddress: string;
  mailingAddress: string;
}

export interface Document {
  type: string;
  name: string;
  size: number;
  lastModifiedDate: string;
}

export interface UserProfileCard extends User {
  documents: Document[];
  medicareBeneficiaryIdentifier: string;
  ssn: string;
}

