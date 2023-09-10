import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() username?: string = '';
  @Input() url: string = "";

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
  }

  signOutHandler(): void {
    localStorage.removeItem(this.username!);
    // this.userService.signOut(this.username!);
  }

}
