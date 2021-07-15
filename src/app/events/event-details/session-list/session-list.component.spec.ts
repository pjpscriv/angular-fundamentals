import {SessionListComponent} from './session-list.component';
import {ISession} from '../../shared/event.model';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  const mockAuthService = null;
  const mockVoterService = null;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      // Arrange
      component.sessions = [
        {name: 'session 1', level: 'intermediate'},
        {name: 'session 2', level: 'beginner'},
        {name: 'session 3', level: 'intermediate'}
      ] as Array<ISession>;
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 89;

      // Act
      component.ngOnChanges();

      // Assert
      expect(component.sessionsViewModel.length).toBe(2);
    });

    it('should filter the sessions correctly', () => {
      // Arrange
      component.sessions = [
        {name: 'session 1', level: 'intermediate'},
        {name: 'session 3', level: 'intermediate'},
        {name: 'session 2', level: 'beginner'}
      ] as Array<ISession>;
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 89;

      // Act
      component.ngOnChanges();

      // Assert
      expect(component.sessionsViewModel[2].name).toBe('session 3');
    });
  });
});
