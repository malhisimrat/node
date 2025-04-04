import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { ContactService } from '../shared/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  addForm = new FormGroup({
    'name':new FormControl('',Validators.required),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'subject':new FormControl('',Validators.required),
    'message':new FormControl('',Validators.required)
  })
  constructor(private toastr : ToastrService,private spinner: NgxSpinnerService,private contact : ContactService) { }

  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
        this.spinner.hide()
    }, 500);
  }

  submit(){
    this.spinner.show()
   
    this.contact.add(this.addForm.value).subscribe({
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

  // sweetalertrun(){
  //   Swal.fire({
  //     title: 'Error!',
  //     text: 'Please fill form first',
  //     icon: 'error',
  //   })
  // }
}
