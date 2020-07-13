import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) { }

  register(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
}
