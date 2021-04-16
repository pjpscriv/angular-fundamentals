import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import { Event } from '../shared/event.type';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public event: Event;
  private id: number;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
