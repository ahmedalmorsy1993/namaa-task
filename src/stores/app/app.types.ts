export interface IHeader {
  title: string;
  value?: string;
  key?: string;
  sortable?: boolean;
  icon?: string;
  [key: string]: any;
}

export interface IMovie {
  title: string;
  year: number;
  number_of_actors: number;
}
export interface IState {
  movies: IMovie[],
  headers: IHeader[]
}
