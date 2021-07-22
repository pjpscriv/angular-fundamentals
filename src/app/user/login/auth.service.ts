import {Injectable} from '@angular/core';
import {IUser} from './user.model';
import {HttpClient} from '@angular/common/http';
import {jsonOptions} from '../../events/shared/http-helpers';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthService {
  public currentUser: IUser;

  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  // Whoop whoop only one user logged in at a time 💥
  public checkAuthenticationStatus(): void {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = data as IUser;
        }
      }))
      .subscribe();
  }

  public loginUser(userName: string, password: string): Observable<any> {
    return this.http.post('/api/login', { username: userName, password: password }, jsonOptions).pipe(
      tap(data => {
          this.currentUser = data['user'] as IUser;
      }),
      catchError(data => {
        console.error(data);
        return of(false);
      }));
  }

  public logoutUser(): Observable<any> {
    this.currentUser = null;
    return this.http.post('/api/logout', {}, jsonOptions);
  }

  public updateCurrentUser(formValues): Observable<any> {
    this.currentUser.firstName = formValues.firstName;
    this.currentUser.lastName = formValues.lastName;
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, jsonOptions);
  }
}
