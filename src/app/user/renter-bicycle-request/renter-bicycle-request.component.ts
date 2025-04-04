import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';
import { BicycleRequestService } from 'src/app/shared/bicycle-request/bicycle-request.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-renter-bicycle-request',
  templateUrl: './renter-bicycle-request.component.html',
  styleUrls: ['./renter-bicycle-request.component.css']
})
export class RenterBicycleRequestComponent implements OnInit {

  imageurl : any
  constructor(private bicycle : BicycleRequestService, private spinner : NgxSpinnerService,private sanitizer : DomSanitizer,@Inject('imageurl') _imageurl:any,private adminauth : AdminauthService) {
    this.imageurl = _imageurl
  }

  ngOnInit(): void {
    // console.log(this.adminauth.getadminid())
    this.getall({'renterId':this.adminauth.getadminid()})
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
  
  async pickup(id:any,status:any){
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (text) {
      // Swal.fire(text)
      this.changeStatus(id,status,text)
    }
  }
  changeStatus(id:any,status:any,pickup:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bicycle.update({'_id':id,'requestStatus':status,'pickUpDescription':pickup}).subscribe({
          next:(res:any)=>{
            // console.log(res)
            Swal.fire(
              'Success!',
              'Your request status has been chnaged.',
              'success'
            )
            this.getall({'renterId':this.adminauth.getadminid()})
          },
          error:(err:any)=>{
            // console.log(err)
            Swal.fire(
              'Error!',
              'Try after some time.',
              'error'
            )
          }
        })
      }
    })
  }

}
