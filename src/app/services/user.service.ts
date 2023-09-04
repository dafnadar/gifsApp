import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor() {
    this.users = JSON.parse(localStorage.getItem('users')!) || [];    
  }

  getUser(user: User) {
    let existUser = this.users
    .find(x => x.username === user.username && x.password === user.password)
    return existUser;   
  }

  getUserById(id: string) {
    return this.users.find(x => x.id === Number(id));
  }

  addUser(user: User) {  
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));    
  }  

  generateId() {
    return this.users.length+1;
  }
}
