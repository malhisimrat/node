import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  istoken : boolean = false 
  userType:any
  constructor(private toastr : ToastrService, private spinner: NgxSpinnerService,private adminauth : AdminauthService,private router : Router) { }

  ngOnInit(): void {
    // console.log(this.adminauth.getadmintoken())
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

    // console.log(this.istoken)
  }

  logout(){
    this.adminauth.destroyservice()
    this.toastr.success("Logout Successfully")
    this.router.navigateByUrl("/admin/admin-login")
  }
}
