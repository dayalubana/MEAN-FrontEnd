import { Component, OnInit } from '@angular/core';
import { AuthService  } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email = ''
  password = ''

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  signup(){
    if(!this.email || !this.password){
      return;
    }
    var data = {
      email: this.email,
      password: this.password
    }
    this.authService.signUp(data)
    .then((res)=>{
      if(res.status==201){
        localStorage.setItem('token',res.data);
        this.router.navigate(['/categories']);
      }
    })
    this.email = '';
    this.password = ''
  }

}
