import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user?: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.checkIfUserExist(params['id'])
    })
  }

  checkIfUserExist(id: string) {
    this.user = this.userService.getUserById(id);
    if (!this.user) {
    this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {
  }

}
