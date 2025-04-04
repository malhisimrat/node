import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewContactComponent } from './admin/admin-view-contact/admin-view-contact.component';
import { AdminViewRequestComponent } from './admin/admin-view-request/admin-view-request.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminGuard } from './admin/adminguard/adminguard.guard';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { AdminviewhirerComponent } from './admin/adminviewhirer/adminviewhirer.component';
import { AdminviewrenterComponent } from './admin/adminviewrenter/adminviewrenter.component';
import { AdminloginComponent } from './admin/auth/adminlogin/adminlogin.component';
import { AddBicycleComponent } from './admin/bicycle/add-bicycle/add-bicycle.component';
import { EditBicycleComponent } from './admin/bicycle/edit-bicycle/edit-bicycle.component';
import { ViewBicycleComponent } from './admin/bicycle/view-bicycle/view-bicycle.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UserViewBicycleComponent } from './user/bicycle/user-view-bicycle/user-view-bicycle.component';
import { MakeBookingComponent } from './user/make-booking/make-booking.component';
import { RenterBicycleRequestComponent } from './user/renter-bicycle-request/renter-bicycle-request.component';
import { RenterProfileComponent } from './user/renter-profile/renter-profile.component';
import { RenterLoginComponent } from './user/renter/renter-login/renter-login.component';
import { RenterRegisterComponent } from './user/renter/renter-register/renter-register.component';
import { UpdateRenterProfileComponent } from './user/update-renter-profile/update-renter-profile.component';
import { UpdateUserProfileComponent } from './user/update-user-profile/update-user-profile.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ViewBookingComponent } from './user/view-booking/view-booking.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/layout/home', pathMatch: 'full'
  },
  {
    path: 'admin', redirectTo: '/admin/admin-login', pathMatch: 'full'
  },
  
  {
    path: 'layout', component: LayoutComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path:'contact',component:ContactComponent
      },
      {
        path:'user-view-bicycle',component:UserViewBicycleComponent
      },
      {
        path:'renter-register',component:RenterRegisterComponent
      },
      {
        path:'renter-login',component:RenterLoginComponent
      },
      {
        path:'user-register',component:UserRegisterComponent
      },
      {
        path:'user-login',component:UserLoginComponent
      },
      {
        path:'renter-add-bicycle',component:AddBicycleComponent,canActivate:[AdminGuard]
      },
      {
        path:'renter-view-bicycle',component:ViewBicycleComponent,canActivate:[AdminGuard]
      },
      {
        path:'renter-edit-bicycle/:id',component:EditBicycleComponent,canActivate:[AdminGuard]
      },
      {
        path:'renter-view-request', component:RenterBicycleRequestComponent,canActivate:[AdminGuard]
      },
      {
        path:'make-booking/:id', component:MakeBookingComponent,canActivate:[AdminGuard]
      },
      {
        path:'view-booking', component:ViewBookingComponent,canActivate:[AdminGuard]
      },
      {
        path:'user-profile', component:UserProfileComponent,canActivate:[AdminGuard]
      },
      {
        path:'update-user-profile/:id', component:UpdateUserProfileComponent,canActivate:[AdminGuard]
      },
      {
        path:'renter-profile', component:RenterProfileComponent,canActivate:[AdminGuard]
      },
      {
        path:'update-renter-profile/:id', component:UpdateRenterProfileComponent,canActivate:[AdminGuard]
      },
    ]
  },
  {
    path:'admin',component:AdminlayoutComponent,
    children:[
      {
        path:'admin-login',component:AdminloginComponent
      },
      {
        path:'admin-dashboard',component:AdmindashboardComponent,canActivate:[AdminGuard]
      },
      {
        path:'admin-viewrenter',component:AdminviewrenterComponent,canActivate:[AdminGuard]
      },
      {
        path:'admin-viewhirer',component:AdminviewhirerComponent,canActivate:[AdminGuard]
      },
      {
        path:'admin-add-bicycle',component:AddBicycleComponent,canActivate:[AdminGuard]
      },
      {
        path:'admin-view-bicycle',component:ViewBicycleComponent,canActivate:[AdminGuard]
      },
      {
        path:'admin-edit-bicycle/:id',component:EditBicycleComponent,canActivate:[AdminGuard]
      },
      {
        path:'admin-view-request', component:AdminViewRequestComponent,canActivate:[AdminGuard]
      },
      {
        path:'admin-view-contact', component:AdminViewContactComponent,canActivate:[AdminGuard]
      }
    ]
  },

  {
    path:'**',component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
