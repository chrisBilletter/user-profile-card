import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { UserProfileComponent} from "./components/user-profile/user-profile.component";
import { UserProfileCardComponent} from "./components/user-profile-card/user-profile-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [UserProfileComponent, UserProfileCardComponent, MatIcon]
})
export class AppComponent {}
