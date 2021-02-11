import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent {

  @Input() public event: any;
  
  getStartTimeClass() {
    if (!!this.event && this.event.time == '8:00 am') {
      return 'green bold';
    } else {
      return []
    }
  }

  getStartTimeStyle():any {
    return this.event.time == '10:00 am' ? { 'color': 'red', 'font-weight': 'bold' } : '';
  }
}
