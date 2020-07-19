import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ThingsService} from '../things.service';
import {IThing} from '../../../models/Thing';

@Component({
  selector: 'rt-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.scss']
})
export class ThingComponent implements OnInit {
  thing: IThing;

  constructor(private route: ActivatedRoute,
              private thingsService: ThingsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.onLoadThingItems(data.id);
    });
  }

  private onLoadThingItems(id: string) {
    this.thingsService.getThing(id).subscribe(data => {
      console.log(data);
      this.thing = data;
    });
  }

}
