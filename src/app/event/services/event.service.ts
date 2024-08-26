import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Attendee } from '../../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  getAttendees():Observable<Attendee[]>{
    return this.httpClient.get<Attendee[]>('api/attendees');
    // return of([
    //   {
    //     name: 'Alice', 
    //     guest: 0, 
    //     attending: true
    //   }
    // ] as Attendee[]);
  }

  addAttendee(attendee: Attendee):Observable<Attendee>{
    return this.httpClient.post<Attendee>('api/attendees', attendee)
  }
}
