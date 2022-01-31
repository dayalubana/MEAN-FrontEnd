import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';    
import {ReactiveFormsModule} from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { UpdateCategoriesComponent } from './update-categories/update-categories.component';
import { ShowCategoriesComponent } from './show-categories/show-categories.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AddCategoriesComponent,
    UpdateCategoriesComponent,
    ShowCategoriesComponent,
    ShowProductsComponent,
    UpdateproductsComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
