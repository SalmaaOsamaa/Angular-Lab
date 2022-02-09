import { Component, OnInit } from '@angular/core';
import { Iusers } from '../SharedClassesandtypes/Iusers';
import { UsersService } from '../Services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList!: Iusers[];
  errMsg: string = ''
  constructor(private userservice: UsersService) { }

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(Iusers => {
      this.userList = Iusers
    }, err => {
      console.log(err)
      this.errMsg = err.message;
    })
  }
  }


