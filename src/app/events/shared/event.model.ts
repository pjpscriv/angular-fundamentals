export interface ISession {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: Array<string>;
}

export interface IEvent {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  onlineUrl?: string;
  location?: {
    address: string;
    city: string;
    country: string;
  };
  sessions: Array<ISession>;
}
