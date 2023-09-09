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

  // find user by username and password in localStorage(users array), and return it.
  getUser(user: User) {
    let existUser = this.users
    .find(x => x.username === user.username && x.password === user.password)
    return existUser;   
  }

  getUserById(id: string) {
    return this.users.find(x => x.id === Number(id));
  }

  // add user to local storage
  addUser(user: User) {  
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem(user.username, JSON.stringify(user))    
  }  

  // add uniqe id to new users
  generateId() {
    return this.users.length+1;
  }

  updateUser(user: User) {
    // update corrent user in local storage
    localStorage.setItem(user.username, JSON.stringify(user));

    // update users array in local storage
    const index = this.users.findIndex(u => u.id === user.id)
    this.users[index] = user;
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
