import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {FirebaseHttpError} from '../../models/FirebaseHttpError';
import {Router} from '@angular/router';

@Component({
  selector: 'rt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: FirebaseHttpError;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false)
  });

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    delete this.error;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authService.login(email, password)
      .then(data => {
        this.router.navigate(['/things/list']);
        console.log(data);
      })
      .catch(err => {
        this.error = err;
      });
  }

}
