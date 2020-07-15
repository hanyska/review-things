import { Component } from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'rt-header',
  template: `
    <nav class="d-flex justify-content-between">
      <div>
        <a class="text-decoration-none" [routerLink]="['/']">
          <h1>{{'appName' | translate}}</h1>
        </a>
      </div>
      <div>
        <button nbButton hero status="primary" [routerLink]="['/auth/login']">Login</button>
        <button nbButton hero status="danger" (click)="onLogout()">{{'header.logout' | translate}}</button>
      </div>
    </nav>
  `
})
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout();
  }

}
