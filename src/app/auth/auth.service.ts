import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  authState: any = null;

  constructor(private firebaseAuth: AngularFireAuth,
              private af: AngularFirestore,
              private router: Router) {
    this.user$ = firebaseAuth.authState;

    firebaseAuth.authState.subscribe(authState => {
      this.authState = authState;
    });
  }

  get userUid() {
    return this.authState.uid;
  }

  get isAuthenticated(): boolean {
    return this.authState !== null;
  }

  register(email, password) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        const userId = data.user.uid;
        const user = {userId};
        this.af.collection('users').doc(userId).set(user);
      });
  }

  login(email, password) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.firebaseAuth.signOut();
    this.router.navigate(['/auth/login']);
  }
}
