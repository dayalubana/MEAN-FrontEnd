import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email = ''
  password = ''

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  signIn(){
    if(!this.email || !this.password){
      return;
    }
    var data = {
      email: this.email,
      password: this.password
    }
    this.authService.signIn(data)
    .then((res)=>{
      console.log(res);
      if(res.status==200){
        localStorage.setItem('token',res.data);
        this.router.navigate(['/categories']);
      }
    });
    this.email = '';
    this.password = ''
  }
}
