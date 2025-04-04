import { Component, Inject, OnInit } from '@angular/core';
import { BicycleService } from 'src/app/shared/bicycle/bicycle.service';
import { NgxSpinnerService } from 'ngx-spinner'
import { DomSanitizer } from '@angular/platform-browser';
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';

@Component({
  selector: 'app-view-bicycle',
  templateUrl: './view-bicycle.component.html',
  styleUrls: ['./view-bicycle.component.css']
})
export class ViewBicycleComponent implements OnInit {

  imageurl : any
  usertype:any

  constructor(private bicycle : BicycleService, private spinner : NgxSpinnerService,private sanitizer : DomSanitizer,@Inject('imageurl') _imageurl:any,private adminauth : AdminauthService) {
    this.imageurl = _imageurl
  }

  ngOnInit(): void {
    this.usertype = this.adminauth.getadminuserType()
    if(this.usertype==1)
    {
      this.getall(null)
    }
    if(this.usertype==2)
    {
      this.getall({'userId':this.adminauth.getadminid()})
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
