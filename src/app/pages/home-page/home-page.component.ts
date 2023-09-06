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
  title: string = "Welcome to Giphy search engine";
  searchTerm?: string;
  placeholder: string = this.searchTerm || "enter key words here...";
  message?: string;
  isValid: boolean = false;
  gifsResult: any[] = [];
  page: number = 1;
  termFromHistory?: string;
  href?: string;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private gifService: GifService) { 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.checkIfUserExist(params['id']);
      this.searchTerm = (params['term']);
      this.href = `${this.user?.id}/history`;
      if (this.searchTerm) {
        this.getResults(this.searchTerm)
      }
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

  //if searchTerm exsist call getResult & setUserHistory methods
  //if no searchTerm entered show message
  handleSerchButton(){        
    if (this.searchTerm) {
      this.getResults(this.searchTerm);      
      this.setUserHistory();                       
    }
    else {
      this.message = "Please enter your search term"
      this.isValid = false;
    }
    console.log(this.user);     
  }

  //get results from gif service
  getResults(searchTerm: string): void {   
    this.gifService.getGifs(searchTerm).subscribe((res: any) => {
      this.gifsResult = res.data as any[]
    });
    this.isValid = true;
    this.message = undefined;
  }
  
  // update user's history searches
  setUserHistory() {
    if (this.user!.historySearches.length > 9) {
      this.user!.historySearches.shift();        
    } 
    this.user!.historySearches.push(this.searchTerm!); 
    this.userService.updateUser(this.user!)
  }

  goToUserHistory() {
    this.router.navigateByUrl(`${this.user?.id}/history`);
  }
}
