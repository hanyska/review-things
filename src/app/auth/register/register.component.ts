import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'rt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onRegister() {
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;

    this.authService.register(email, password)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

}
