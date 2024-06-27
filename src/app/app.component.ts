import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {User} from "./auth/models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  auth: boolean = false
  user: User = new User()

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    if (!this.auth) {
      this.router.navigate(['/auth'])
    }
    this.authService.getUser().subscribe({
      next: user => {
        if (user) {
          this.user = user;
          this.auth = true
        }
      }
    })
  }

  logout() {
    this.auth = false
    this.authService.logout()
    this.router.navigate(['/auth'])
  }
}
