import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { RenterService } from 'src/app/shared/renter/renter.service';

@Component({
  selector: 'app-renter-register',
  templateUrl: './renter-register.component.html',
  styleUrls: ['./renter-register.component.css']
})
export class RenterRegisterComponent implements OnInit {

  addForm = new FormGroup({
    'name':new FormControl('',Validators.required),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',Validators.required),
    'contact':new FormControl('',[Validators.required,Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]),
    'userType':new FormControl(2),
    'idProof_image':new FormControl('')
  })

  constructor(private toastr : ToastrService,private spinner: NgxSpinnerService, private renter : RenterService) { }

  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
        this.spinner.hide()
    }, 500);
  }

  uploadimage(event:any){
    this.addForm.patchValue({'idProof_image':event.target.files[0]})
  }

  submit(){
    this.spinner.show()
    const data = new FormData()
    data.append('name',this.addForm.value.name)
    data.append('email',this.addForm.value.email)
    data.append('password',this.addForm.value.password)
    data.append('contact',this.addForm.value.contact)
    data.append('userType',this.addForm.value.userType)
    data.append('idProof_image',this.addForm.value.idProof_image)

    // console.log('name',this.addForm.value.name,
    // 'email',this.addForm.value.email,
    // 'password',this.addForm.value.password,
    // 'contact',this.addForm.value.contact,
    // 'userType',this.addForm.value.userType,
    // 'idProof_image',this.addForm.value.idProof_image)

    this.renter.add(data).subscribe({
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
      error:(err:any)=>{
        this.spinner.hide()
        // console.log(err)
        this.toastr.error('Server Error')
      }
    })
  }

}
