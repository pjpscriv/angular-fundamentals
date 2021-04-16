import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public isDirty = true;

  constructor(private router: Router) { }

  cancel(): void {
    this.router.navigate(['events']);
  }

  ngOnInit() {
  }

}
