import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { BicycleRequestService } from 'src/app/shared/bicycle-request/bicycle-request.service';

@Component({
  selector: 'app-admin-view-request',
  templateUrl: './admin-view-request.component.html',
  styleUrls: ['./admin-view-request.component.css']
})
export class AdminViewRequestComponent implements OnInit {
  imageurl : any
  constructor(private bicycle : BicycleRequestService, private spinner : NgxSpinnerService,private sanitizer : DomSanitizer,@Inject('imageurl') _imageurl:any) {
    this.imageurl = _imageurl
  }

  ngOnInit(): void {
    this.getall(null)
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
