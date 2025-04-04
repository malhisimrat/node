import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private toast: ToastrService, private userService: UserServiceService, private userdata: UserDataService, private router: Router) { }

  ngOnInit(): void {
    if (this.userdata.getUserData() != null) {
      this.router.navigateByUrl('/home')
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public onLogin() {
    this.spinner.show()
    this.userService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.spinner.hide()
        if (res.success) {
          this.toast.success('Login Successfully', 'Success')
          this.userdata.setData(res);
          location.reload()
          //this.router.navigateByUrl('/home')
        } else {
          this.toast.error(res.message, 'Error')
        }
      },
      error: (e) => {
        this.spinner.hide()
        this.toast.error(e.error.message)
      },
      complete: () => { this.spinner.hide() }
    })
  }

}
