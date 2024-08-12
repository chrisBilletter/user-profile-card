import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import {
  UserProfileCard
} from '../../models/user-profile.model';

@Component({
  selector: 'app-user-profile-card',
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule, NgClass],
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss']
})
export class UserProfileCardComponent {
  public viewOnly: boolean = true;
  public userProfileData: UserProfileCard;

  public ngOnInit(): void {
    this.getUserProfileData();
  }

  public editUserProfileCard(): void {
    this.viewOnly = !this.viewOnly; //test
  }

  private getUserProfileData(): void {
    this.userProfileData =
      {
        firstName: 'Ebony',
        lastName: 'Moore',
        email: 'EbonyMoore456@gmail.com',
        phoneNumber: '(216)835-9545-5432',
        address: {
          homeAddress: '123 Maple Street, Cleveland, OH 44119',
          mailingAddress: '10th West, 456 Apple Street, Cleveland, OH 44127',
        },
        ssn: '235-71-1083',
        dob: '05/09/1998',
        medicareBeneficiaryIdentifier: '1EG4-TE5-MK73',
        documents: [
          {
            lastModifiedDate: '02/02/2022',
            name: 'ID Card.png',
            size: 23425,
            type: 'png'
          },
          {
            lastModifiedDate: '11/23/2023',
            name: 'Health...doc',
            size: 15735,
            type: 'doc'
          }, {
            lastModifiedDate: '11/23/2023',
            name: 'Records...doc',
            size: 15835,
            type: 'doc'
          }
        ]
      }
  }
}
