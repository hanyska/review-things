import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ThingsService} from '../things.service';
import {IThing} from '../../../models/Thing';
import {NbDialogService} from '@nebular/theme';
import {NewItemComponent} from './new-item/new-item.component';

@Component({
  selector: 'rt-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.scss']
})
export class ThingComponent implements OnInit {
  thing: IThing;

  constructor(private route: ActivatedRoute,
              private thingsService: ThingsService,
              private dialogService: NbDialogService) { }

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

  onAddNewItem() {
    const newItemDialog = this.dialogService.open(NewItemComponent, {
      autoFocus: false,
      hasBackdrop: true,
      closeOnBackdropClick: true,
      context: {
        thing: this.thing,
        title: 'Ania'
      }
    });

    newItemDialog.onClose.subscribe(data => {
      console.log(data);
    });
  }

}
