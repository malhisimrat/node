import { Component, Inject, OnInit } from '@angular/core';
import { BicycleService } from 'src/app/shared/bicycle/bicycle.service';
import { NgxSpinnerService } from 'ngx-spinner'
import { DomSanitizer } from '@angular/platform-browser';
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';
import { ProfileService } from 'src/app/shared/profile/profile.service';

@Component({
  selector: 'app-renter-profile',
  templateUrl: './renter-profile.component.html',
  styleUrls: ['./renter-profile.component.css']
})
export class RenterProfileComponent implements OnInit {

  
  imageurl : any
  usertype:any

  constructor(private profile : ProfileService, private spinner : NgxSpinnerService,private sanitizer : DomSanitizer,@Inject('imageurl') _imageurl:any,private adminauth : AdminauthService) {
    this.imageurl = _imageurl
  }

  ngOnInit(): void {
    this.usertype = this.adminauth.getadminuserType()
    
      this.getall({'_id':this.adminauth.getadminid()})
    
  }

  getimagepath(image:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageurl+image)
  }

  data : any
  getall(data:any){
    this.spinner.show()
    this.profile.profile(data).subscribe({
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
