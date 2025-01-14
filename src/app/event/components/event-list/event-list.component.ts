import { Component, Input } from '@angular/core';
import { Attendee } from '../../../models';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent {

  @Input()
  attendees: Attendee[] | null= [];

}
