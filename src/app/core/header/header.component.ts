import { Component, OnInit } from '@angular/core';

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
        <button nbButton hero status="danger">{{'header.logout' | translate}}</button>
      </div>
    </nav>
  `
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
