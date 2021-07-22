import {Component, OnInit} from '@angular/core';
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
  public addMode = false;
  public filterBy = 'all';
  public sortBy = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.event = data['event'];
      this.addMode = false;
    });
  }

  addSession(): void {
    this.addMode = true;
  }

  saveSession(session: ISession): void {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
    session.id = nextId;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }
}
