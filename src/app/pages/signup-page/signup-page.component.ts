import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.addUser(this.user);   
  }
}
