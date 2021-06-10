import {Directive, Inject, OnInit, ElementRef, Input} from '@angular/core';
import {JQ_TOKEN} from './jquery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {

  @Input('appModalTrigger') public modalId: string;
  private el: HTMLElement;

  constructor(
    private ref: ElementRef,
    @Inject(JQ_TOKEN) private $: any
  ) { }

  public ngOnInit() {
    this.ref.nativeElement.addEventListener('click', () => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
