import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserComponent} from "./user.component";
import {UserSettingsComponent} from "./user-settings/user-settings.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";


@NgModule({
  declarations: [
    UserComponent,
    UserSettingsComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
