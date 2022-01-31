import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { MainService } from '../main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit {
  showMsg: string;
  newImage: File;
  id: any;

  constructor(private mainService:MainService,
    private route: ActivatedRoute,
    private router: Router) { }
  product = {
    title:'',
    price:'',
    content:'',
    imagePath:'',
    category:''
  };
  categories = []

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.mainService.getProduct({id:res.id})
      .then((info)=>{
        console.log(info);
        if(info==null){
          this.showMsg = 'Something Went Wrong...'
        } else{
          this.id = info.data._id;
          this.product.title = info.data.title;
          this.product.price = info.data.price;
          this.product.content = info.data.content;
          this.product.imagePath = info.data.imagePath;
          this.product.category = info.data.category;
        }
      })
      
    });
    this.mainService.getCategories()
    .then((res)=>{
      this.categories = res.data;
    })
  }
  selectedCategory(category){
    this.product.category = category.name
  }
  PickedImage(event: Event){  
    const file = (event.target as HTMLInputElement).files[0];  
    // this.form.patchValue({image: file}); 
    this.newImage = file;
    // this.form.get('image').updateValueAndValidity();   
    const reader = new FileReader(); 
    reader.onload = ()=>{  
      this.product.imagePath = reader.result as string;  
    };   
    reader.readAsDataURL(file);  
  }  
  updateProduct(){
    if(this.product.title&&this.product.content&&this.product.price&&this.product.category){
      var productData = new FormData();
      productData.append('title',this.product.title)
      productData.append('content',this.product.content)
      productData.append('price',this.product.price)
      productData.append('category',this.product.category)
      productData.append('updatedimage',this.newImage)
      productData.append('id',this.id)

      this.mainService.updateProduct(productData)
      .then((res)=>{
        console.log(res);
        if(res.status==201){
          this.router.navigate(['/']);
        }
      })
      this.product.imagePath = '';
    } else{
      this.showMsg = 'All inputs are required.'
    }
  }
}
