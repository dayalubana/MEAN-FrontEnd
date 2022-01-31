import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  showMsg: any = '';

  constructor(private mainService:MainService,
    private router: Router) { }
  name='';
  ngOnInit(): void {
  }
  addCategory(){
    var data = {
      name: this.name
    }
    this.mainService.addCategory(data)
    .then((res)=>{
      if(res.data.status==400){
        this.showMsg = res.data.message
      } else{
        this.router.navigate(['/categories']);
      }
    })
  }
}
