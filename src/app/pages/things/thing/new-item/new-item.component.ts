import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NbDialogRef} from '@nebular/theme';
import {ThingsService} from '../../things.service';
import {IThing} from '../../../../models/Thing';

@Component({
  selector: 'rt-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  title: string;
  thing: IThing;

  newItemForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    rate: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  constructor(private dialogRef: NbDialogRef<NewItemComponent>,
              private thingsService: ThingsService) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {
    const item = {
      date: new Date(),
        ...this.newItemForm.value
    };

    this.thingsService.addItem(this.thing.name, item)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

}
