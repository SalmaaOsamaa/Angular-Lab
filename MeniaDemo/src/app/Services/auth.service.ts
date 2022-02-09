import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface authResponse {
  user:{name:string};
  token:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(http:HttpClient) { }
  ) { }
}
