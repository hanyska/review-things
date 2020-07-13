import { Component } from '@angular/core';

@Component({
  selector: 'rt-site-layout',
  template: `
    <nb-layout>
      <nb-layout-column class="colored-column-basic">
        <router-outlet></router-outlet>
      </nb-layout-column>
      <nb-layout-footer>
        <rt-footer></rt-footer>
      </nb-layout-footer>
    </nb-layout>
  `
})
export class EmptyLayoutComponent {}
