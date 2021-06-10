import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {

  @Input() count: number;
  @Input() set voted(value) {
    this.iconColor = value ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  public iconColor = 'white';


  constructor() { }

  onClick(): void {
    this.vote.emit();
  }

}
