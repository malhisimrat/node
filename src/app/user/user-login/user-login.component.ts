import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminauthService } from 'src/app/shared/adminauth/adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  addForm = new FormGroup({
    'email':new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',Validators.required)
  })
  constructor(private toastr : ToastrService, private spinner: NgxSpinnerService,private adminauth : AdminauthService,private router : Router) { }

  ngOnInit(): void {
    this.spinner.show()
   
    setTimeout(() => {
        this.spinner.hide()
    }, 1000);
  }

  submit(){
    this.spinner.show()
    this.adminauth.login(this.addForm.value).subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        if(res.success)
        {
          this.toastr.success(res.message)
          this.adminauth.createservice(res)
          this.router.navigateByUrl('/layout/home')
        }
        else{
          this.toastr.error(res.message)
        }
      },
      error:(err)=>{
        this.spinner.hide()
        this.toastr.error('Oops!','Server Down')

      }
    })
  }

}
