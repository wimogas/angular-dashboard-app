import { Injectable } from '@angular/core';
import {User} from "./models/User";
import {BehaviorSubject, map, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Subject<User|null> = new Subject();
  user = this.user$.asObservable()

  constructor() { }

  login() {
    const newUser = new User(
      'username1',
      'user@mail.com'
    )
    return this.user$.next(newUser)
  }

  getUser() {
    return this.user
  }

  logout() {
    this.user$.next(null)
  }
}
