import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.css']
})
export class ShowCategoriesComponent implements OnInit {

  constructor(private mainService:MainService) { }
  categories = [];

  ngOnInit(): void {
    this.mainService.getCategories()
    .then((res)=>{
      this.categories = res.data;
    })
  }
  removeCategory(category){
    this.mainService.removeCategory(category)
    .then((res)=>{
      if(res.data.deletedCount>0){
        this.categories = this.categories.filter((categ)=>{
          if(categ.name!=category.name){
            return categ
          }
        })
      }
    })
  }
}
