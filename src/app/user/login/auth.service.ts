import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  public currentUser: IUser;

  public isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  public loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: 'itisntreasybneinggreen',
      firstName: 'Kermit',
      lastName: 'The Frog'
    };
  }
}
