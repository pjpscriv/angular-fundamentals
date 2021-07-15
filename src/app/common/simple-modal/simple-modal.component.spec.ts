import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleModalComponent} from './simple-modal.component';
import {JQ_TOKEN} from '../jquery.service';

describe('SimpleModalComponent', () => {
  let component: SimpleModalComponent;
  let fixture: ComponentFixture<SimpleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleModalComponent ],
      providers: [{ provide: JQ_TOKEN, useValue: null }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
