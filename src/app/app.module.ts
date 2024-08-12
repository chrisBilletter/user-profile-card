import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { UserProfileCardComponent } from "./components/user-profile-card/user-profile-card.component";
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserProfileCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [ MaterialModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent, UserProfileComponent, UserProfileCardComponent]
})
export class AppModule { }
