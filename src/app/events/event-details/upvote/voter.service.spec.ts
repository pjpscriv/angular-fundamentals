import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ISession} from '../../shared/event.model';
import {of} from 'rxjs';

import {VoterService} from './voter.service';
import {jsonOptions} from '../../shared/http-helpers';

describe('VoterService', () => {
  let service: VoterService;
  let mockHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    service = new VoterService(mockHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('deleteVoter', () => {
    it('should remove a voter from the list of voters', () => {
      // Arrange
      const session = { id: 6, voters: ['joe', 'john'] } as ISession;
      mockHttp.delete.and.returnValue(of(null));

      // Act
      service.deleteVoter(3, session, 'joe');

      // Assert
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete with the right url', () => {
      // Arrange
      const session = { id: 6, voters: ['joe', 'john'] } as ISession;
      const expectedUrl = `/api/events/3/sessions/${session.id}/voters/joe`;
      mockHttp.delete.and.returnValue(of(null));

      // Act
      service.deleteVoter(3, session, 'joe');

      // Assert
      expect(mockHttp.delete).toHaveBeenCalledWith(expectedUrl, jsonOptions);
    });
  });

  describe('addVoter', () => {
    it('should call http.post with the right url', () => {
      // Arrange
      const session = { id: 6, voters: ['john'] } as ISession;
      const expectedUrl = `/api/events/3/sessions/${session.id}/voters/joe`;
      mockHttp.post.and.returnValue(of(null));

      // Act
      service.addVoter(3, session, 'joe');

      // Assert
      expect(mockHttp.post).toHaveBeenCalledWith(expectedUrl, {}, jsonOptions);
    });
  });
});
