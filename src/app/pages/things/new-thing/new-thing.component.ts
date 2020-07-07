import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ThingsService} from '../things.service';

@Component({
  selector: 'rt-new-thing',
  templateUrl: './new-thing.component.html',
  styleUrls: ['./new-thing.component.scss']
})
export class NewThingComponent implements OnInit {
  title: string;

  newThingForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private dialogRef: NbDialogRef<NewThingComponent>,
              private thingsService: ThingsService) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {
    const newThing = {
      date: new Date(),
      name: this.newThingForm.get('name').value
    };
    this.thingsService.addThing(newThing)
      .then(() => {
      this.dialogRef.close();
      })
      .catch(error => {
        console.log(error);
      });
  }

}
