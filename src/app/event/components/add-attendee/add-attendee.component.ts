import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Attendee } from '../../../models';

@Component({
  selector: 'app-add-attendee',
  templateUrl: './add-attendee.component.html',
  styleUrl: './add-attendee.component.scss'
})
export class AddAttendeeComponent {

  @Output()
  addAttendee = new EventEmitter<Attendee>();
  
  addAttendeeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  submit(){
    const attendee : Attendee = {
      name: this.addAttendeeForm.value.name,
      guest: 0,
      attending: true
    };
    this.addAttendee.emit(attendee);
  }
}
