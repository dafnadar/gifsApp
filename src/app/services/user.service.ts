import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  //correntUser?: User;

  constructor() {
    this.users = JSON.parse(localStorage.getItem('users')!) || [];
    // this.correntUser = JSON.parse(localStorage.getItem('users')!)
  }

  getUser(user: User) {
    let existUser = this.users
    .find(x => x.username === user.username && x.password === user.password)
    return existUser;   
  }

  getUserById(id: string) {
    //let user = this.users.find(x => x.id === Number(id));
    return this.users.find(x => x.id === Number(id));
  }

  addUser(user: User) {  
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem(user.username, JSON.stringify(user))    
  }  

  generateId() {
    return this.users.length+1;
  }

  updateUser(user: User) {
    //update corrent user in local storage
    localStorage.setItem(user.username, JSON.stringify(user));

    //update users array in local storage
    const index = this.users.findIndex(u => u.id === user.id)
    this.users[index] = user;
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
