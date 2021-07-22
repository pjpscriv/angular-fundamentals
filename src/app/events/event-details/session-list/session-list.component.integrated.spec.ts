import {SessionListComponent} from './session-list.component';
import {ISession} from '../../shared/event.model';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {AuthService} from '../../../user/login/auth.service';
import {VoterService} from '../upvote/voter.service';
import {DurationPipe} from '../../shared/duration.pipe';
import {By} from '@angular/platform-browser';
import {CollapsibleWellComponent} from '../../../common/collapsible-well/collapsible-well.component';
import {UpvoteComponent} from '../upvote/upvote.component';

describe('SessionListComponent', () => {
  let mockAuthService: AuthService;
  let mockVoterService: VoterService;
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(() => {
    mockAuthService = { isAuthenticated: () => true, currentUser: { userName: 'Peter' }} as AuthService;
    mockVoterService = { userHasVoted: (a, b) => true } as VoterService;
    TestBed.configureTestingModule({
      declarations: [
        SessionListComponent,
        DurationPipe,
        // CollapsibleWellComponent,
        // UpvoteComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debugEl = fixture.debugElement;
  });

  describe('initial display', () => {
    it('should have the correct name', () => {
      // Arrange
      component.sessions = [{ name: 'session 1', id: 234, presenter: 'Me', duration: 1,
        abstract: 'This is a session.', voters: ['john', 'bob'], level: 'intermediate'}] as Array<ISession>;
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 89;
      component.ngOnChanges();

      // Act
      fixture.detectChanges();

      // Assert
      expect(element.querySelector('#title').textContent).toContain('session 1');
      expect(debugEl.query(By.css('#title')).nativeElement.textContent).toContain('session 1');
    });
  });
});
