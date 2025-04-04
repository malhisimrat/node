import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { AdminloginComponent } from './admin/auth/adminlogin/adminlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminheaderComponent } from './admin/adminlayout/adminheader/adminheader.component';
import { AdminfooterComponent } from './admin/adminlayout/adminfooter/adminfooter.component';
import { AdminviewrenterComponent } from './admin/adminviewrenter/adminviewrenter.component';
import { AdminviewhirerComponent } from './admin/adminviewhirer/adminviewhirer.component';
import { AddBicycleComponent } from './admin/bicycle/add-bicycle/add-bicycle.component';
import { ViewBicycleComponent } from './admin/bicycle/view-bicycle/view-bicycle.component';
import { EditBicycleComponent } from './admin/bicycle/edit-bicycle/edit-bicycle.component';
import { UserViewBicycleComponent } from './user/bicycle/user-view-bicycle/user-view-bicycle.component';
import { RenterRegisterComponent } from './user/renter/renter-register/renter-register.component';
import { RenterLoginComponent } from './user/renter/renter-login/renter-login.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ErrorComponent } from './error/error.component';
import { AdminViewRequestComponent } from './admin/admin-view-request/admin-view-request.component';
import { AdminViewContactComponent } from './admin/admin-view-contact/admin-view-contact.component';
import { RenterBicycleRequestComponent } from './user/renter-bicycle-request/renter-bicycle-request.component';
import { MakeBookingComponent } from './user/make-booking/make-booking.component';
import { ViewBookingComponent } from './user/view-booking/view-booking.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UpdateUserProfileComponent } from './user/update-user-profile/update-user-profile.component';
import { UpdateRenterProfileComponent } from './user/update-renter-profile/update-renter-profile.component';
import { RenterProfileComponent } from './user/renter-profile/renter-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AdminloginComponent,
    AdminlayoutComponent,
    AdmindashboardComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminviewrenterComponent,
    AdminviewhirerComponent,
    AddBicycleComponent,
    ViewBicycleComponent,
    EditBicycleComponent,
    UserViewBicycleComponent,
    RenterRegisterComponent,
    RenterLoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ErrorComponent,
    AdminViewRequestComponent,
    AdminViewContactComponent,
    RenterBicycleRequestComponent,
    MakeBookingComponent,
    ViewBookingComponent,
    UserProfileComponent,
    UpdateUserProfileComponent,
    UpdateRenterProfileComponent,
    RenterProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
