import { Component, OnInit } from '@angular/core';
import {ThingsService} from '../things.service';

@Component({
  selector: 'rt-things-list',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.scss']
})
export class ThingsListComponent implements OnInit {
  isLoadingThings: boolean;
  things: any;

  constructor(private thingsService: ThingsService) { }

  ngOnInit(): void {
    this.loadThings();
  }

  private loadThings() {
    this.isLoadingThings = true;
    this.thingsService.getThings().subscribe(data => {
      this.things = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...[e.payload.doc.data()]
        };
      });
      console.log(data);
      this.isLoadingThings = false;
    }, error => {
      console.log(error);
      this.isLoadingThings = false;
    });
  }
}
