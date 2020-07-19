import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {IThing} from '../../models/Thing';

@Injectable({
  providedIn: 'root'
})
export class ThingsService {
  constructor(private firebase: AngularFirestore) { }

  getThings() {
    return this.firebase.collection('things')
      .snapshotChanges()
      .pipe(
        map((doc: any) => {
          return doc.map(a => {
            const data = a.payload.doc.data();
            data.id = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  getThing(id: string) {
    return this.firebase.doc<IThing>('things/' + id).valueChanges();
  }

  addThing(thing: IThing) {
    return this.firebase.collection('things').doc(thing.name.replace(' ', '_')).set(thing);
  }

  updateThing(things: any) {
    delete things.id;
    return this.firebase.doc(`things/${things.id}`).update(things);
  }

  deleteThing(id: number) {
    return this.firebase.doc(`things/${id}`).delete();
  }
}
