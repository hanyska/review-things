import { Component } from '@angular/core';

@Component({
  selector: 'rt-footer',
  template: `
    <p>
      <span class="pr-1">{{'footer.createdWith' | translate}}</span>
      <nb-icon icon="heart" [options]="{ animation: { type: 'zoom' } }"></nb-icon>
      <span class="px-1">{{'footer.by' | translate}}</span>
      <span>Anna Janusz</span>
    </p>
  `
})
export class FooterComponent {}
