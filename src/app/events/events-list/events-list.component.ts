import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'src/app/common/toastr.service';
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
    private toastrService: ToastrService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  onThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }
}
