import {Injectable} from '@angular/core';
import {IEvent, ISession} from './event.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {handleError, jsonOptions} from './http-helpers';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Array<IEvent>> {
    return this.http.get<Array<IEvent>>('/api/events')
      .pipe(catchError(handleError<Array<IEvent>>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`/api/events/${id}`)
      .pipe(catchError(handleError<IEvent>('getEvent', null)));
  }

  saveEvent(event: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>('/api/events', event , jsonOptions)
      .pipe(catchError((handleError<IEvent>('saveEvent'))));
  }

  searchSessions(searchTerm: string): Observable<Array<ISession>> {
    return this.http.get<Array<ISession>>(`/api/sessions/search?=${searchTerm}`)
      .pipe(catchError((handleError<Array<ISession>>('searchSessions'))));
  }
}
