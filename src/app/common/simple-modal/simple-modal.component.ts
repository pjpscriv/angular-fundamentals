import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Inject} from '@angular/core';
import {JQ_TOKEN} from '../jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {

  constructor(@Inject(JQ_TOKEN) private $: any) {
  }

  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick = false;
  @ViewChild('modalContainer') containerEl: ElementRef;

  public bodyClick() {
    if (this.closeOnBodyClick) {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
