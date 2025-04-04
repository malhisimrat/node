import { Component, Inject, OnInit } from '@angular/core';
import { BicycleService } from 'src/app/shared/bicycle/bicycle.service';
import { NgxSpinnerService } from 'ngx-spinner'
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';

@Component({
  selector: 'app-user-view-bicycle',
  templateUrl: './user-view-bicycle.component.html',
  styleUrls: ['./user-view-bicycle.component.css']
})
export class UserViewBicycleComponent implements OnInit {
  imageurl : any
  
  userType:any
  istoken:any = false

  constructor(private bicycle : BicycleService, private spinner : NgxSpinnerService,private sanitizer : DomSanitizer,@Inject('imageurl') _imageurl:any,private router : Router,private adminauth : AdminauthService) {
    this.imageurl = _imageurl
  }

  ngOnInit(): void {
    this.getall(null)
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

  getimagepath(image:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageurl+image)
  }

  data : any
  getall(data:any){
    this.spinner.show()
    this.bicycle.getall(data).subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.data =res.data
      },
      error:(err:any)=>{
        this.spinner.hide()
      }
    })
  }

}
