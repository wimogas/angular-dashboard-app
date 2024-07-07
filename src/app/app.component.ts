import {Component, OnInit} from '@angular/core';
import {AuthService} from "./_services/auth.service";
import {User} from "./auth/models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  user: User | null = null

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.user.subscribe({
      next: user => {
        if (user) {
          this.user = user;
        }
      }
    })
  }

  logout() {
    this.authService.logout().subscribe(
      {
        next: () => {
          window.location.reload()
        }
      }
    )
  }
}
