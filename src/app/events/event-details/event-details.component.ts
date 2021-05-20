import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Params} from '@angular/router';
import {IEvent, ISession} from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public event: IEvent;
  public addMode = false;
  public filterBy = 'all';
  public sortBy = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
    session.id = nextId;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
}
