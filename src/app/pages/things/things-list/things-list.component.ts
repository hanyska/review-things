import { Component, OnInit } from '@angular/core';
import {ThingsService} from '../things.service';
import {NbDialogService} from '@nebular/theme';
import {NewThingComponent} from '../new-thing/new-thing.component';
import {IThing} from '../../../models/Thing';
import {Router} from '@angular/router';

@Component({
  selector: 'rt-things-list',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.scss']
})
export class ThingsListComponent implements OnInit {
  isLoadingThings: boolean;
  things: any;

  constructor(private thingsService: ThingsService,
              private dialogService: NbDialogService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadThings();
  }

  private loadThings() {
    this.isLoadingThings = true;
    this.thingsService.getThings().subscribe(data => {
      this.things = data;
      console.log(data);
      this.isLoadingThings = false;
    }, error => {
      console.log(error);
      this.isLoadingThings = false;
    });
  }

  onAddNewThing() {
    const newThingDialog = this.dialogService.open(NewThingComponent, {
      autoFocus: false,
      hasBackdrop: true,
      closeOnBackdropClick: true,
      context: {
        title: 'Ania'
      }
    });

    newThingDialog.onClose.subscribe(data => {
      console.log(data);
    });
  }

  onDetailsThing(thing: IThing) {
    console.log(thing);
    this.router.navigate([]);
  }
}
