import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=12&dalay=1`)
      .pipe(pluck('data'));
  }

  getUserById(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(map((resp: any) => resp.data));
  }

}
