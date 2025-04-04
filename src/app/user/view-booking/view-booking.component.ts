import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';
import { BicycleRequestService } from 'src/app/shared/bicycle-request/bicycle-request.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  imageurl : any
  constructor(private bicycle : BicycleRequestService, private spinner : NgxSpinnerService,private sanitizer : DomSanitizer,@Inject('imageurl') _imageurl:any,private adminauth : AdminauthService) {
    this.imageurl = _imageurl
  }

  ngOnInit(): void {
    // console.log(this.adminauth.getadminid())
    this.getall({'hirerId':this.adminauth.getadminid()})
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

  changedatetime(timestamp:any){
    var split_dt = timestamp.split('T')
    var split_time = split_dt[1].split('.')
    // console.log(split_time)
    return split_dt[0]+" "+ split_time[0]
  }

}
