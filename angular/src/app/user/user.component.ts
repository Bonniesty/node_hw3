import { Component, OnInit } from '@angular/core';
import {UserUrl} from '../url/user.url';
import {UserName} from '../url/user.name';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  doglist: any;
  title = 'homework4';
  name: any;

  constructor(private userData: UserUrl, private userName: UserName) {
    this.name = 'Tianyi Sun';

  }

  ngOnInit() {
    this.getUserList();
    this.getName();
  }

  getUserList() {
    this.userData.getDog()
      .subscribe((data: string) => this.doglist = data);
  }

  getName() {
    this.userName.getName()
      .subscribe((data: string) => this.name = data);
  }

  onSubmit() {


  }



}
