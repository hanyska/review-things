export interface IItem {
  id?: number;
  date?: string;
  photo?: string;
  description?: string;
  rate?: number;
  price?: number;
}

export class Item implements IItem {
  constructor(public id?: number,
              public date?: string,
              public photo?: string,
              public description?: string,
              public rate?: number,
              public price?: number) {}
}
