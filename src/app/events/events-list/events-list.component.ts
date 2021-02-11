import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {
  events = [{
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00am',
    price: 200.00,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '101 Business Street',
      city: 'Wellington',
      country: 'New Zealand'
    }
  }]
}
