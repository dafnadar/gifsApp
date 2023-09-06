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
  //historyUrl?: string; // link to history
  offset!: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private gifService: GifService) { 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.checkIfUserExist(params['id']);
      this.searchTerm = (params['term']);
      //this.historyUrl = `${this.user?.id}/history`; // link to history
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
      this.getResults(this.searchTerm);      
      this.setUserHistory();
      this.showGifs = true;                       
    }
    else {
      this.showMsg = true;
      this.showGifs = false;                       
    }
  }

  prevResults() {
    this.offset -= 10;
    this.getResults(this.searchTerm!);
  }

  nextResults() {
    this.offset += 10;
    this.getResults(this.searchTerm!);    
  }

  //get results from gif service
  getResults(searchTerm: string): void {   
    this.gifService.getGifs(searchTerm, this.offset).subscribe((res: any) => {      
      this.gifsResult = res.data as any[];
    });
    this.showMsg = false;
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
