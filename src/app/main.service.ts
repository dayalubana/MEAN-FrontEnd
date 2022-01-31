import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  addCategory(data){
    return axios.post('http://localhost:3000/addcategory',data);
  }
  getCategories(){
    return axios.get('http://localhost:3000/getcategories');
  }

  removeCategory(data){
    return axios.post('http://localhost:3000/removeCategory',data);
  }
  updateCategory(data){
    return axios.post('http://localhost:3000/updateCategory',data);
  }
  updateProduct(data){
    return axios.post('http://localhost:3000/updateproduct',data);
  }
  addProduct(data){
    return axios.post('http://localhost:3000/addproduct',data);
  }
  getProducts(){
    return axios.get('http://localhost:3000/getproducts');
  }
  removeProduct(data){
    return axios.post('http://localhost:3000/removeProduct',data);
  }
  getProduct(data){
    return axios.post('http://localhost:3000/getproduct',data);
  }
}
