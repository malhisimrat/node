import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/admin/category/add-category/add-category.component';
import { EditCategoryComponent } from './components/admin/category/edit-category/edit-category.component';
import { ViewCategoryComponent } from './components/admin/category/view-category/view-category.component';
import { AddCustomerComponent } from './components/admin/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/admin/customer/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './components/admin/customer/view-customer/view-customer.component';
import { EditOrdersComponent } from './components/admin/orders/edit-orders/edit-orders.component';
import { ViewOrdersComponent } from './components/admin/orders/view-orders/view-orders.component';
import { AddProductComponent } from './components/admin/product/add-product/add-product.component';
import { EditProductComponent } from './components/admin/product/edit-product/edit-product.component';
import { ProductInfoComponent } from './components/admin/product/product-info/product-info.component';
import { ViewProductComponent } from './components/admin/product/view-product/view-product.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { AddSubcategoryComponent } from './components/admin/subcategory/add-subcategory/add-subcategory.component';
import { EditSubcategoryComponent } from './components/admin/subcategory/edit-subcategory/edit-subcategory.component';
import { ViewSubcategoryComponent } from './components/admin/subcategory/view-subcategory/view-subcategory.component';
import { AuthGuard } from './components/auth/authguard';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'home', component:HomepageComponent},
  {path:'login', component:LoginComponent},
  // {path:'customer/add', component: AddCustomerComponent},
  {path:'customer', canActivate: [AuthGuard] ,children:[
    {path:'add', component: AddCustomerComponent},
    {path:'view', component: ViewCustomerComponent},
    {path:'edit/:id', component: EditCustomerComponent},
  ]},
  {path:'category', canActivate: [AuthGuard] ,children:[
    {path:'add', component: AddCategoryComponent},
    {path:'view', component: ViewCategoryComponent},
    {path:'edit/:id', component: EditCategoryComponent},
  ]},
  {path:'subcategory', canActivate: [AuthGuard] ,children:[
    {path:'add', component: AddSubcategoryComponent},
    {path:'view', component: ViewSubcategoryComponent},
    {path:'edit/:id', component: EditSubcategoryComponent},
  ]},
  {path:'product', canActivate: [AuthGuard] ,children:[
    {path:'add', component: AddProductComponent},
    {path:'view', component: ViewProductComponent},
    {path:'edit/:id', component: EditProductComponent},
  ]},
  {path:'order', canActivate: [AuthGuard] ,children:[
    {path:'view', component: ViewOrdersComponent},
    {path:'edit/:id', component: EditOrdersComponent},
  ]},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path:'product-info/:id', component: ProductInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
