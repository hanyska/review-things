import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ThingsService {
  constructor(private firebase: AngularFirestore) { }

  getThings() {
    return this.firebase.collection('things').snapshotChanges();
  }

  addThing(things: any) {
    return this.firebase.collection('things').add(things);
  }

  updateThing(things: any) {
    delete things.id;
    return this.firebase.doc(`things/${things.id}`).update(things);
  }

  deleteThing(id: number) {
    return this.firebase.doc(`things/${id}`).delete();
  }
}
