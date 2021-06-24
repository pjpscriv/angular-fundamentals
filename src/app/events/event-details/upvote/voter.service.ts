import { Injectable } from '@angular/core';
import {ISession} from '../../shared/event.model';
import {HttpClient} from '@angular/common/http';
import {handleError, jsonOptions} from '../../shared/http-helpers';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  deleteVoter(eventId: number, session: ISession, voterName: string): void {
    session.voters = session.voters.filter(voter => voter !== voterName);
    this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`, jsonOptions)
      .pipe(catchError(handleError('deleteVoter')))
      .subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string): void {
    session.voters.push(voterName);
    this.http.post(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`, {}, jsonOptions)
      .pipe(catchError(handleError('addVoter')))
      .subscribe();
  }

  userHasVoted(session: ISession, username: string): boolean {
    return session.voters.some(voterName => voterName === username);
  }
}
