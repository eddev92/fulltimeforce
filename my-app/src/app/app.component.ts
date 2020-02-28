import { Appservice } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listUsers: any = [];

  constructor(private appservice: Appservice) { }

  ngOnInit() {
    this.appservice.getUsers().subscribe((res: any) => {
      console.log(res);
      this.listUsers = res.data;
      console.log(this.listUsers)
    })
  }
}
