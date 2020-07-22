import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {IThing} from '../../models/Thing';
import {IItem} from '../../models/Item';
import {AuthService} from '../../auth/auth.service';
import {firestore} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ThingsService {
  constructor(private firebase: AngularFirestore,
              private authService: AuthService) { }

  getThings() {
    const thingsCollection = this.firebase.collection('things', ref => {
      return ref.where('userId', '==', this.authService.userUid);
    });
    return thingsCollection
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
    return this.firebase.collection('things').doc(id).valueChanges();
  }

  addThing(thing: IThing) {
    const t = {
      ...thing,
      userId: this.authService.userUid
    };

    return this.firebase.collection('things').doc(thing.name.replace(' ', '_')).set(t);
  }

  updateThing(things: any) {
    delete things.id;
    return this.firebase.doc(`things/${things.id}`).update(things);
  }

  deleteThing(id: number) {
    return this.firebase.doc(`things/${id}`).delete();
  }

  addItem(thing, item: IItem) {
    return this.firebase.collection('things').doc(thing).update({
      items: firestore.FieldValue.arrayUnion(item)
    });
  }
}
