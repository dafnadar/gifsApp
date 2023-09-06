import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  user?: User = new User();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.user = this.userService.getUserById(params['id']);     
    })
  }
  
  ngOnInit(): void {
    if (!this.user) {
      console.log("ddddddddddddddddddddddddd");            
    }
  }

  goToHome(term: string): void {
    this.router.navigateByUrl(`${this.user?.id}/${term}`);
  }

}
