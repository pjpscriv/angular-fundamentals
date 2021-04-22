import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IEvent} from '../shared/event.model';
import {EventService} from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public isDirty = true;
  public newEvent: IEvent;

  constructor(
    private router: Router,
    private eventService: EventService) { }

  cancel(): void {
    this.router.navigate(['events']);
  }

  ngOnInit() {
    // this.newEvent = {
    //   id: 1234,
    //   sessions: [],
    //   name: 'Ng Trade Me',
    //   date: new Date('8/8/2024'),
    //   time: '10am',
    //   price: 200,
    //   location : {
    //     address: '2 Market Lane',
    //     city: 'Wellington',
    //     country: 'New Zealand'
    //   },
    //   onlineUrl: 'https://www.trademe.co.nz/ng-trade-me',
    //   imageUrl: 'https://www.trademe.co.nz/images/frend/trademe-logo-no-tagline.png'
    // };
  }

  public saveEvent(formValues): void {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['events']);
  }

}
