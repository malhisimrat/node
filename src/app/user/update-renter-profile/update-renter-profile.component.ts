import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { RenterService } from 'src/app/shared/renter/renter.service';
import { HirerService } from 'src/app/shared/hirer/hirer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-renter-profile',
  templateUrl: './update-renter-profile.component.html',
  styleUrls: ['./update-renter-profile.component.css']
})
export class UpdateRenterProfileComponent implements OnInit {

  addForm = new FormGroup({
    '_id':new FormControl(''),
    'name':new FormControl('',Validators.required),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',Validators.required),
    'contact':new FormControl('',[Validators.required,Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]),
    'userType' : new FormControl(2)
  })

  constructor(private toastr : ToastrService,private spinner: NgxSpinnerService, private user : HirerService, private activatedroute : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
        this.spinner.hide()
    }, 500);
    this.getsingle()
  }

  getsingle(){
    this.spinner.show()
    this.user.getsingle({'_id':this.activatedroute.snapshot.paramMap.get('id')}).subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.addForm.patchValue({'name':res.data.name})
        this.addForm.patchValue({'email':res.data.email})
        this.addForm.patchValue({'contact':res.data.contact})
      },
      error:(err:any)=>{
        this.spinner.hide()

      }
    })
  }
  

  submit(){
    this.spinner.show()
    this.addForm.patchValue({'_id':this.activatedroute.snapshot.paramMap.get('id')})
    this.user.udpate(this.addForm.value).subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        if(res.success)
        {
          this.toastr.success(res.message)
          this.router.navigateByUrl('/layout/renter-profile')
        }
        else{
          this.toastr.error(res.message)          
        }
      },
      error:(err:any)=>{
        this.spinner.hide()
        // console.log(err)
        this.toastr.error('Server Error')
      }
    })
  }


}
