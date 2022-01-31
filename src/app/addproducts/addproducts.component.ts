import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";  
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  showMsg: any = '';
  Pickedimage: string = '';
  form: FormGroup;  
  categories = [];
  currentCategory: any = '';

  constructor(private mainService:MainService,
    private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({  
      'title': new FormControl(null, {validators:[Validators.required, Validators.minLength(3)]}),
      'content': new FormControl(null, {validators: [Validators.required]})     ,
      'price': new FormControl(null, {validators: [Validators.required]})     ,
      'image': new FormControl(null, {validators:[Validators.required]})  
    });  
    this.mainService.getCategories()
    .then((res)=>{
      this.categories = res.data;
    })
  }
  selectedCategory(category){
    this.currentCategory = category.name
  }
  onAddPost(){
    var productData = new FormData();
    productData.append('title',this.form.value.title)
    productData.append('content',this.form.value.content)
    productData.append('price',this.form.value.price)
    productData.append('category',this.currentCategory)
    productData.append('image',this.form.value.image)

    this.mainService.addProduct(productData)
    .then((res)=>{
      console.log(res);
      if(res.status==201){
        this.router.navigate(['/']);
      }
    })
    this.form.reset();  
    this.Pickedimage = '';
  }
  PickedImage(event: Event){  
    const file = (event.target as HTMLInputElement).files[0];  
    this.form.patchValue({image: file}); 
    this.form.get('image').updateValueAndValidity();   
    const reader = new FileReader(); 
    reader.onload = ()=>{  
      this.Pickedimage = reader.result as string;  
    };   
    reader.readAsDataURL(file);  
  }  
}
