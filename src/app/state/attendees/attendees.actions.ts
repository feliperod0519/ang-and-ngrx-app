import { Action } from '@ngrx/store';
import { Attendee } from '../../models';

export enum AttendeesActionTypes {
  LoadAttendees = '[Attendees Page] Load Attendees',
  LoadAttendeesSuccess = '[Attendees API] Load Attendees Success',
  LoadAttendeesFailure = '[Attendees API] Load Attendees Failure'
}

export class LoadAttendees implements Action {
  readonly type = AttendeesActionTypes.LoadAttendees;
}

export class LoadAttendeesSuccess implements Action {
  readonly type = AttendeesActionTypes.LoadAttendeesSuccess;
  constructor(public payload: { attendees: Attendee[] }) {}
}

export class LoadAttendeesFail implements Action {
    readonly type = AttendeesActionTypes.LoadAttendeesFailure;
    constructor(public payload: any) {}
}

export type AttendeesActions =
  | LoadAttendees
  | LoadAttendeesSuccess
  | LoadAttendeesFail;