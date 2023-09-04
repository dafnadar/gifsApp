import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 user: User = new User();
 @Output() onSubmitEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.onSubmitEvent.emit(this.user);
  }

}
