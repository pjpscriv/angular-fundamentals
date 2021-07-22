import {HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

export const jsonOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export function handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
  return error => {
    console.error(error);
    return of(result as T);
  };
}
