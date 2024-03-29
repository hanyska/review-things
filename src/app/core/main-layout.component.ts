import { Component } from '@angular/core';

@Component({
  selector: 'rt-app-layout',
  template: `
    <nb-layout>
      <nb-layout-header>
        <rt-header class="w-100"></rt-header>
      </nb-layout-header>
      <nb-layout-column class="colored-column-basic">
        <router-outlet></router-outlet>
      </nb-layout-column>
      <nb-layout-footer>
        <rt-footer></rt-footer>
      </nb-layout-footer>
    </nb-layout>

  `
})
export class MainLayoutComponent {}
