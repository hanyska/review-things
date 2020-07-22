import {IItem} from './Item';

export interface IThing {
  date?: {
    seconds: string;
  };
  name?: string;
  address?: string;
  photo?: string;
  items?: IItem[];
}

export class Thing implements IThing {
  constructor(public date?: {seconds: string},
              public name?: string,
              public address?: string,
              public photo?: string,
              public items?: IItem[]) {
  }
}
