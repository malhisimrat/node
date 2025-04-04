import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private toast: ToastrService, private router: Router, private customerService: CustomerService, private userdata: UserDataService) { }

  ngOnInit(): void {
  }

  formData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  public submit() {
    this.spinner.show()
    this.customerService.registerCustomer(this.formData.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        if (res.success) {
          this.toast.success(res.message, 'Success')
          this.router.navigateByUrl('/customer/view')
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
