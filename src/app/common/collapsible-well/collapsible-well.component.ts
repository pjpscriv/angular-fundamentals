import {Component} from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent {
  public contentVisible = false;

  toggleContent(): void {
    this.contentVisible = !this.contentVisible;
  }
}
