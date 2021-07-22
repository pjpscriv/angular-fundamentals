import {Component} from '@angular/core';
import {AuthService} from '../user/login/auth.service';
import {IEvent, ISession} from '../events/shared/event.model';
import {EventService} from '../events/shared/event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent {
  public searchTerm = '';
  public events: Array<IEvent>;
  public foundSessions: Array<ISession>;

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

  public searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }

}
