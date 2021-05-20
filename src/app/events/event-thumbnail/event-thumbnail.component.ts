import {Component, Input} from '@angular/core';
import {IEvent} from '../shared/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {

  @Input() public event: IEvent;

  getStartTimeClass() {
    if (!!this.event && this.event.time === '8:00 am') {
      return 'green bold';
    } else {
      return [];
    }
  }

  getStartTimeStyle(): any {
    return this.event.time === '10:00 am' ? { color: 'red', 'font-weight': 'bold' } : '';
  }
}
