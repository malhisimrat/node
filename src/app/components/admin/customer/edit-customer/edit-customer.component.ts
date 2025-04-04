import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private toast: ToastrService, private customerService: CustomerService, private spinner: NgxSpinnerService, private userdata: UserDataService) { }
  id: any;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.getDataById()
  }
  data:any;
  getDataById(){
    this.spinner.show()
    this.customerService.singleCustomer({_id:this.id}).subscribe({
        next: (res:any) => {
          if (!res.success) {
            this.toast.error(res.message, 'Error')
          }
          this.data = res.data
          this.formData.patchValue({_id:this.id})
          this.formData.patchValue({name:this.data.name})
          this.formData.patchValue({email:this.data.email})
        },
        error: (e) => {
          this.spinner.hide()
          this.toast.error(e.error.message)
        },
        complete: () => { this.spinner.hide() }
      }
    )
  }

  formData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    _id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });

  public submit() {
    this.spinner.show()
    this.customerService.updateCustomer(this.formData.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        if (res.success) {
          this.toast.success(res.message, 'Success')
          var userData = JSON.parse(this.userdata.getUserData() ?? '')
          if (userData?.data?.userType == 1){
            this.router.navigateByUrl('/customer/view')
          }else{
            this.router.navigateByUrl('/home')
          }
        } else {
          this.toast.error(res.message, 'Error')
        }
      },
      err => {
        this.spinner.hide()
        this.toast.error(err.error.message, 'Error')
      }
    )
  }

}
