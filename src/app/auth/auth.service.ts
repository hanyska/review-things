import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router) {
    this.user$ = firebaseAuth.authState;
  }

  register(email, password) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.firebaseAuth.signOut();
    this.router.navigate(['/auth/login']);
  }
}
