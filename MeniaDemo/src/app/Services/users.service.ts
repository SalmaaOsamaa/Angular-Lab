import { Iusers } from './../SharedClassesandtypes/Iusers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getAllUsers():Observable<Iusers[]>{
    return this.http.get<Iusers[]>('https://jsonplaceholder.typicode.com/users')
  }
}
