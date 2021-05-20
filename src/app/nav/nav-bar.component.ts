import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/login/auth.service';
import {ISession} from '../events/shared/event.model';
import {EventService} from '../events/shared/event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit {

  public searchTerm = '';
  public foundSessions: Array<ISession>;

  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit() {

  }

  public searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }

}
