export interface IItem {
  id?: number;
  date?: {
    seconds?: string;
  };
  photo?: string;
  name?: string;
  description?: string;
  rate?: number;
  price?: number;
  thing?: string;
}

export class Item implements IItem {
  constructor(public id?: number,
              public date?: { seconds: string },
              public photo?: string,
              public name?: string,
              public description?: string,
              public rate?: number,
              public price?: number,
              public thing?: string) {}
}
