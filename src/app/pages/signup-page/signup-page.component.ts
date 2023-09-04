import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  onSubmit(user: User): void {
    user.id = this.userService.generateId();
    this.userService.addUser(user);
    this.router.navigateByUrl(`${user.id}`);
  }

  
}
