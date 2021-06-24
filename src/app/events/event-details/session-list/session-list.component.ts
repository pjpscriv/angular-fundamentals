import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../../shared/event.model';
import {AuthService} from '../../../user/login/auth.service';
import {VoterService} from '../upvote/voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: Array<ISession>;
  @Input() eventId: number;
  @Input() filterBy: string;
  @Input() sortBy: string;
  public sessionsViewModel: Array<ISession> = [];

  constructor(
    private voterService: VoterService,
    public auth: AuthService
  ) {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.sessionsViewModel.sort(sortByNameAsc) : this.sessionsViewModel.sort(sortByVotesDesc);
    }
  }

  toggleVote(session: ISession): void {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.sessionsViewModel.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);

  }

  private filterSessions(filter: string) {
    if (filter === 'all') {
      this.sessionsViewModel = this.sessions.slice(0);
    } else {
      this.sessionsViewModel = this.sessions.filter(s => s.level.toLowerCase() === filter);
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  if (s1.voters.length < s2.voters.length) {
    return 1;
  } else if (s1.voters.length === s2.voters.length) {
    return 0;
  } else {
    return -1;
  }
}
