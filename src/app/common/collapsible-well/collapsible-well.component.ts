import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {
  public contentVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.contentVisible = !this.contentVisible;
  }
}
