import { Component, OnInit } from '@angular/core';
import { Attendee } from '../../../models';
import { EventService } from '../../services/event.service';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../../state/state'

import { StartSpinner, StopSpinner } from '../../../state/spinner/spinner.actions';
import { getSpinner } from '../../../state/spinner/spinner.selector';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent implements OnInit {

  spinner$: Observable<boolean> = new Observable<boolean>();
  attendees$: Observable<Attendee[]> = new Observable<Attendee[]>();

  constructor(private eventService: EventService, private store: Store<State>) {
  }

  ngOnInit(): void {
    this.getAttendees();
    this.spinner$ = this.store.pipe(select(getSpinner));
  }

  addAttendee(attendee: Attendee): void{
    // this.attendees = [...this.attendees, attendee];
    // console.log('TCL: EventComponent -> addAttendee -> this.attendees', this.attendees);
    this.store.dispatch(new StartSpinner());
    this.eventService.addAttendee(attendee).subscribe(
      (attendee: Attendee) => {
        this.store.dispatch(new StopSpinner());
        this.getAttendees();
      }
    );
  }

  getAttendees(): void{
    this.attendees$ = this.eventService.getAttendees();
  }
}
