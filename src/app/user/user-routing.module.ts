import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserSettingsComponent} from "./user-settings/user-settings.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {UserComponent} from "./user.component";

const routes: Routes = [
  {
  path: '', component: UserComponent,
  },
  {
    path: 'user/profile', component: UserProfileComponent, pathMatch:'full'
  },
  {
    path: 'user/settings', component: UserSettingsComponent, pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
