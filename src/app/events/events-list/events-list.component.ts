import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {IEvent} from '../shared/event.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: Array<IEvent>;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
