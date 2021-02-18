import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  onThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }
}
