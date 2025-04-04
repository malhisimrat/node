import { Component, Inject, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'
import { DomSanitizer } from '@angular/platform-browser';
import { RenterService } from 'src/app/shared/renter/renter.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-adminviewrenter',
  templateUrl: './adminviewrenter.component.html',
  styleUrls: ['./adminviewrenter.component.css']
})
export class AdminviewrenterComponent implements OnInit {

  imageurl : any
  constructor(private renter : RenterService, private spinner : NgxSpinnerService,private sanitizer : DomSanitizer,@Inject('imageurl') _imageurl:any) {
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
    this.renter.getall(data).subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.data =res.data
      },
      error:(err:any)=>{
        this.spinner.hide()
      }
    })
  }

  updatestatus(id:any,status:any){
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
        this.renter.udpate({'_id':id,'userStatus':status}).subscribe({
          next:(res:any)=>{
            // console.log(res)
            Swal.fire(
              'Success!',
              'Your request status has been chnaged.',
              'success'
            )
            this.getall(null)
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
