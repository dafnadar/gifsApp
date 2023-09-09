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
  searchTerm?: string;
  showMsg: boolean = false;
  showGifs: boolean = false;
  gifsResult: any[] = [];
  totalResults: any[] = [];
  offset: number = 0;
  page: number = 1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private gifService: GifService) { 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.checkIfUserExist(params['id']);
      this.searchTerm = (params['term']);
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
      this.offset = 0;
      this.totalResults = [];
      this.getResults(this.searchTerm);      
      this.setUserHistory();                             
    }
    else {
      this.showMsg = true;
      this.showGifs = false;                       
    }
  }

  //set page to previous page number
  prevResults() {
    this.page-=1;        
  }

  nextResults() {
    if(!(this.totalResults.length > this.page*10)) {
      this.offset += 10;
      this.getResults(this.searchTerm!);          
    }
    this.page+=1;    
  }

  //get results from gif service and set totalResults array
  getResults(searchTerm: string): void {       
    this.gifService.getGifs(searchTerm, this.offset).subscribe((res: any) => {      
      this.gifsResult = res.data as any[];
      this.totalResults.push(...this.gifsResult);
    });
    this.showMsg = false;
    this.showGifs = true;
  }
  
  // update user's history searches in local storage
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
