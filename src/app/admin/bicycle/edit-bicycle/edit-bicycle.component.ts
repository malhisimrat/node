import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';
import { BicycleService } from 'src/app/shared/bicycle/bicycle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-bicycle',
  templateUrl: './edit-bicycle.component.html',
  styleUrls: ['./edit-bicycle.component.css']
})
export class EditBicycleComponent implements OnInit {

  usertype:any
  addForm = new FormGroup({
    '_id':new FormControl(''),
    'bikeType':new FormControl('',Validators.required),
    'description':new FormControl('',[Validators.required]),
    'bicycle_image':new FormControl(''),
    'location':new FormControl('',Validators.required),
    'userId':new FormControl(''),
    'pricePerHour':new FormControl('',[Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.min(0)])
  })
  constructor(private toastr : ToastrService,private spinner: NgxSpinnerService,private adminauth : AdminauthService,private bicycle : BicycleService,private activatedroute : ActivatedRoute,private router : Router) { }

  adminuserId : any
  ngOnInit(): void {
    this.usertype = this.adminauth.getadminuserType()
    this.adminuserId = this.adminauth.getadminid()
    this.getsingle()
    this.addForm.patchValue({'_id':this.activatedroute.snapshot.paramMap.get('id')})
    this.spinner.show()
    setTimeout(() => {
        this.spinner.hide()
    }, 500);
  }

  uploadimage(event:any){
    this.addForm.patchValue({'bicycle_image':event.target.files[0]})
  }

  getsingle(){
    this.spinner.show()
    this.bicycle.getsingle({'_id':this.activatedroute.snapshot.paramMap.get('id')}).subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.addForm.patchValue({'bikeType':res.data.bikeType})
        this.addForm.patchValue({'description':res.data.description})
        this.addForm.patchValue({'pricePerHour':res.data.pricePerHour})
        this.addForm.patchValue({'bicycle_image':res.data.bicycle_image})
        this.addForm.patchValue({'location':res.data.location})
      },
      error:(err:any)=>{
        this.spinner.hide()

      }
    })
  }

  submit(){
    this.spinner.show()
    const data = new FormData()
    data.append('_id',this.addForm.value._id)
    data.append('bikeType',this.addForm.value.bikeType)
    data.append('description',this.addForm.value.description)
    data.append('bicycle_image',this.addForm.value.bicycle_image)
    data.append('location',this.addForm.value.location)
    data.append('pricePerHour',this.addForm.value.pricePerHour)
    data.append('userId',this.adminuserId)

    this.bicycle.udpate(data).subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        if(res.success)
        {
          this.toastr.success(res.message)
          if(this.usertype==1)
          {
            this.router.navigateByUrl('/admin/admin-view-bicycle')
          }
          else{
            this.router.navigateByUrl('/layout/renter-view-bicycle')
          }
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
