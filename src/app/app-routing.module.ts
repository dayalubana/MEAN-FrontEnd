import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { ShowCategoriesComponent } from './show-categories/show-categories.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateCategoriesComponent } from './update-categories/update-categories.component';
import { AuthGuard } from './guard/auth.guard';
import { ShowProductsComponent } from './show-products/show-products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';

const routes: Routes = [
  {path:'signin', component: SignInComponent},
  {path:'signup',component: SignUpComponent},
  {path:'addcategory',canActivate:[AuthGuard],component: AddCategoriesComponent},
  {path:'updatecategory/:id/:name',canActivate:[AuthGuard],component: UpdateCategoriesComponent},
  {path:'categories',canActivate:[AuthGuard],component: ShowCategoriesComponent},
  {path:'products',canActivate:[AuthGuard],component: ShowProductsComponent},
  {path:'addproduct',canActivate:[AuthGuard],component: AddproductsComponent},
  {path:'updateproduct/:id',canActivate:[AuthGuard],component: UpdateproductsComponent},
  {path: '**',canActivate:[AuthGuard],redirectTo:'/products'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
