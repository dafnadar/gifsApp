import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { GifService } from 'src/app/services/gif.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user?: User;
  title: string = "Welcome to Giphy search engine"
  searchWord: string = '';
  message?: string;
  isValid: boolean = false;
  gifsResult: any[] = [];
  page: number = 1;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private gifService: GifService) { 
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

  goSearch(){        
    if (this.searchWord) {
      this.gifService.getGifs(this.searchWord).subscribe((res: any) => {
        this.gifsResult = res.data as any[]
      }); 
      this.isValid = true;
      this.message = undefined;     
    }
    else {
      this.message = "Please enter your search term"
      this.isValid = false;
    } 
  }

}
