import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(data){
    return axios.post('http://localhost:3000/signup',data);
  }
  signIn(data){
    return axios.post('http://localhost:3000/signin',data);
  }
}
