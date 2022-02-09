import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icomments } from '../SharedClassesandtypes/Icomments';
import {Iposts} from '../SharedClassesandtypes/Iposts'

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getAllposts():Observable<Iposts[]>{
    return this.http.get<Iposts[]>('https://jsonplaceholder.typicode.com/posts')
  }
  getPost(id:number):Observable<Icomments[]>{
    return this.http.get<Icomments[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
