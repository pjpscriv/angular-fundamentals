import {Component, OnInit} from '@angular/core';
import {AuthService} from './user/login/auth.service';

@Component({
  selector: 'app-events-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {
  title = 'Upcoming Angular Events';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
