import { Appservice } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listUsers: any = [];
  newUser: any = {
    id: '',
    enabled: 0,
    activated: 0,
    name: '',
    userName: '',
    email: '',
    userGroup: '',
    lastVisit: '',
    registered: ''
  };
  showForm = false;

  constructor(private appservice: Appservice) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.appservice.getUsers().subscribe((res: any) => {
      this.listUsers = res.data;
    });
  }

  showFormRegister() {
    this.showForm = true;
  }

  registerUser() {
    if (this.newUser) {
      const dateNow = new Date();
      this.newUser.registered = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} / ${new Date().getHours()} hrs`;
      this.newUser.lastVisit = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} / ${new Date().getHours()} hrs`;
      console.log(this.newUser)
      this.appservice.registerUser(this.newUser).subscribe((response: any) => {
        this.showForm = false;
        this.loadUsers();
      }, (error: any) => {
        console.log(error, 'ERROR al registrar')
      });
    }
  }
}
