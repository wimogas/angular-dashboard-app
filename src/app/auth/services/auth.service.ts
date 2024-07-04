import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {BehaviorSubject, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);
  user = this.user$.asObservable()

  constructor() { }

  login() {
    const newUser = new User(
      'username1',
      'user@mail.com'
    )
    return of(newUser).pipe(
      tap(data => this.user$.next(data))
    )
  }

  logout() {
    return of(null).pipe(
      tap(data => this.user$.next(data))
    )
  }
}
