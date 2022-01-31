import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { MainService } from '../main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css']
})
export class UpdateCategoriesComponent implements OnInit {
  categoryName: any;
  oldName: any;
  showMsg: string;

  constructor(private route: ActivatedRoute,
    private mainService:MainService,
    private router: Router) { }
  categoryId: any;
  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.categoryId = res.id;
      this.categoryName = res.name;
      this.oldName = res.name;
    });
  }
  updateCategory(){
    if(this.oldName==this.categoryName){
      this.showMsg = 'Name already exists...';
      return
    }
    var data = {
      id: this.categoryId,
      name: this.categoryName
    }
    this.mainService.updateCategory(data)
    .then((res)=>{
      if(res.data.modifiedCount>0){
        this.router.navigate(['/categories']);
      } else{
        this.showMsg = 'Something went wrong...';
      }
    })
  }
}
