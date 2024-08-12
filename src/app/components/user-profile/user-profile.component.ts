import { Component } from '@angular/core';
import { UserProfileCardComponent } from "../user-profile-card/user-profile-card.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  imports: [UserProfileCardComponent],
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {}
