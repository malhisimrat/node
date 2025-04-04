import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { BicycleRequestService } from 'src/app/shared/bicycle-request/bicycle-request.service';
import { ActivatedRoute } from '@angular/router';
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';
@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css']
})
export class MakeBookingComponent implements OnInit {

 
  addForm = new FormGroup({
    'bicycleId':new FormControl(''),
    'hirerId':new FormControl(''),
    'startDateTime':new FormControl('',Validators.required),
    'numOfHours':new FormControl('',Validators.required)
  })
  constructor(private toastr : ToastrService,private spinner: NgxSpinnerService,private bicycle : BicycleRequestService,private activateroute : ActivatedRoute,private adminauth : AdminauthService) { }

  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
        this.spinner.hide()
    }, 500);

    this.addForm.patchValue({'bicycleId':this.activateroute.snapshot.paramMap.get('id')})
    this.addForm.patchValue({'hirerId':this.adminauth.getadminid()})
  }

  submit(){
    this.spinner.show()
   
    this.bicycle.add(this.addForm.value).subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        if(res.success)
        {
          this.toastr.success(res.message)
          this.addForm.reset()
        }
        else{
          this.toastr.error(res.message)          
        }
      },
      error:()=>{
        this.spinner.hide()
        this.toastr.error('Server Error')
      }
    })
  }

}
