import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  istoken : boolean = false 
  userType:any
  constructor(private router : Router, private adminauth : AdminauthService,private toastr : ToastrService) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    if(this.adminauth.getadmintoken() != null)
    {
      this.istoken = true
      this.userType = this.adminauth.getadminuserType()
    }
    else{
      this.istoken = false
      this.userType = 1
    }
  }

  logout(){
    this.adminauth.destroyservice()
    this.toastr.success("Logout Successfully")
    this.router.navigateByUrl("/layout/user-view-bicycle")
  }

}
