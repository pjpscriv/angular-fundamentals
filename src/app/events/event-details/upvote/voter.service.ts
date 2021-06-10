import { Injectable } from '@angular/core';
import {ISession} from '../../shared/event.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  deleteVoter(session: ISession, username: string): void {
    session.voters = session.voters.filter(voter => voter !== username);
  }

  addVoter(session: ISession, username: string): void {
    session.voters.push(username);
  }

  userHasVoted(session: ISession, username: string): boolean {
    return session.voters.some(voterName => voterName === username);
  }
}
