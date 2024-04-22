export interface IHeader {
  title: string;
  value?: string;
  key?: string;
  sortable?: boolean;
  icon?: string;
  [key: string]: any;
}


export interface IState {
  items: any[],
  headers: IHeader[]
}
