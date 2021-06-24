import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {IEvent} from '../shared/event.model';
import {EventService} from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  public isDirty = true;
  public newEvent: IEvent;

  constructor(
    private router: Router,
    private eventService: EventService) { }

  public cancel(): void {
    this.router.navigate(['events']);
  }

  public saveEvent(formValues): void {
    this.eventService.saveEvent(formValues).subscribe(_ => {
      this.isDirty = false;
      this.router.navigate(['events']);
    });
  }
}
