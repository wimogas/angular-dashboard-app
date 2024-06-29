import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserSettingsComponent} from "./user-settings/user-settings.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {UserComponent} from "./user.component";
import {AuthGuard} from "../auth/guards/auth-guard.guard";

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'profile', component: UserProfileComponent,
      },
      {
        path: 'settings', component: UserSettingsComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
