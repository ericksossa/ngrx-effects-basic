import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users: User[] = [];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((users: any) => {
        this.users = users;
      });
  }

}
