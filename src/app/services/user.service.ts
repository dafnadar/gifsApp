import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor() { 
  }

  addUser(user: User) {
    this.users = JSON.parse(localStorage.getItem('users')!) || [];
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
