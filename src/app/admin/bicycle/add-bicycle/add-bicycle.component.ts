import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';
import { BicycleService } from 'src/app/shared/bicycle/bicycle.service';

@Component({
  selector: 'app-add-bicycle',
  templateUrl: './add-bicycle.component.html',
  styleUrls: ['./add-bicycle.component.css']
})
export class AddBicycleComponent implements OnInit {

  usertype:any 
  addForm = new FormGroup({
    'bikeType':new FormControl('',Validators.required),
    'description':new FormControl('',[Validators.required]),
    'bicycle_image':new FormControl(''),
    'location':new FormControl('',Validators.required),
    'userId':new FormControl(''),
    'pricePerHour':new FormControl('',[Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.min(0)])
  })
  constructor(private toastr : ToastrService,private spinner: NgxSpinnerService,private adminauth : AdminauthService,private bicycle : BicycleService) { }

  adminuserId : any
  ngOnInit(): void {
    this.usertype= this.adminauth.getadminuserType()
    this.adminuserId = this.adminauth.getadminid()
    this.spinner.show()
    setTimeout(() => {
        this.spinner.hide()
    }, 500);
  }

  uploadimage(event:any){
    this.addForm.patchValue({'bicycle_image':event.target.files[0]})
  }

  submit(){
    this.spinner.show()
    const data = new FormData()
    data.append('bikeType',this.addForm.value.bikeType)
    data.append('description',this.addForm.value.description)
    data.append('bicycle_image',this.addForm.value.bicycle_image)
    data.append('location',this.addForm.value.location)
    data.append('pricePerHour',this.addForm.value.pricePerHour)
    data.append('userId',this.adminuserId)

    this.bicycle.add(data).subscribe({
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
