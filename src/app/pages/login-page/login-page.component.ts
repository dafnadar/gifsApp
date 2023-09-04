import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(user: User): void {
    const existingUser = this.userService.getUser(user);    
    if (existingUser) {
      console.log(existingUser);
      
      this.router.navigateByUrl(`${existingUser.id}`);
    }
    else {
      this.errMessage = 'ggggggggg';
    }        
  }

}
