import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';
import { ToastrService } from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authservice : AdminauthService,private router : Router,private toastr : ToastrService) {
  }

  canActivate():boolean{
    if(this.authservice.getadmintoken() != null)
    {
        return true
    }
    else{
        this.toastr.warning('Please login to access this page')
        this.router.navigateByUrl("/admin/admin-login")
        return false

    }
  }
}