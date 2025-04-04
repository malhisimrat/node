import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './components/admin/customer/add-customer/add-customer.component';
import { ViewCustomerComponent } from './components/admin/customer/view-customer/view-customer.component';
import { EditCustomerComponent } from './components/admin/customer/edit-customer/edit-customer.component';
import { AddCategoryComponent } from './components/admin/category/add-category/add-category.component';
import { ViewCategoryComponent } from './components/admin/category/view-category/view-category.component';
import { EditCategoryComponent } from './components/admin/category/edit-category/edit-category.component';
import { EditSubcategoryComponent } from './components/admin/subcategory/edit-subcategory/edit-subcategory.component';
import { AddSubcategoryComponent } from './components/admin/subcategory/add-subcategory/add-subcategory.component';
import { ViewSubcategoryComponent } from './components/admin/subcategory/view-subcategory/view-subcategory.component';
import { ViewProductComponent } from './components/admin/product/view-product/view-product.component';
import { AddProductComponent } from './components/admin/product/add-product/add-product.component';
import { EditProductComponent } from './components/admin/product/edit-product/edit-product.component';
import { ViewOrdersComponent } from './components/admin/orders/view-orders/view-orders.component';
import { EditOrdersComponent } from './components/admin/orders/edit-orders/edit-orders.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductInfoComponent } from './components/admin/product/product-info/product-info.component';
import { RegisterComponent } from './components/admin/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomepageComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    EditCustomerComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    EditCategoryComponent,
    EditSubcategoryComponent,
    AddSubcategoryComponent,
    ViewSubcategoryComponent,
    ViewProductComponent,
    AddProductComponent,
    EditProductComponent,
    ViewOrdersComponent,
    EditOrdersComponent,
    DashboardComponent,
    ProductInfoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
