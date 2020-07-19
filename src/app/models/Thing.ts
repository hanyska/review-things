import {Item} from './Item';

export interface IThing {
  date?: Date;
  name?: string;
  address?: string;
  photo?: string;
  items?: Item[];
}

export class Thing implements IThing {
  constructor(public date: Date,
              public name: string,
              public address: string,
              public photo: string,
              public items: Item[]) {
  }
}
