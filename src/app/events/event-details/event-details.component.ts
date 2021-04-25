import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent, ISession} from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public event: IEvent;
  private id: number;
  private addMode = false;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
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
