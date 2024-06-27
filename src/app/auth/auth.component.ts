import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  login() {
    this.authService.login()
    this.router.navigate(['/'])
  }

}
