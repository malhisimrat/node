import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  constructor(private toast: ToastrService, private customerService: CustomerService, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllList()
  }

  dataList:any
  getAllList(){
    this.spinner.show()
    this.customerService.viewCustomer({}).subscribe({
        next: (res:any) => {
          if (!res.success) {
            this.toast.error(res.message, 'Error')
          }
          this.dataList = res.data
        },
        error: (e) => {
          this.spinner.hide()
          this.toast.error(e.error.message)
        },
        complete: () => { this.spinner.hide() }
      }
    )
  }

}
