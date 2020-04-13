import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUserById('1').subscribe(
      resp => this.user = resp
    );
  }

}
