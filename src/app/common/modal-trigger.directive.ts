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
  ) {
    this.el = ref.nativeElement;
  }

  public ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
