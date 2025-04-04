import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { OrderServiceService } from 'src/app/services/orders/order-service.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalOrders:any
  totalCustomers:any
  totalProducts:any
  
  constructor(private toast: ToastrService, private _orderService: OrderServiceService, private spinner: NgxSpinnerService, private _userService: UserServiceService) { }

  ngOnInit(): void {
    this.getDash()
  }

  getDash(){
    console.log('hey')
    this.spinner.show()
    this._userService.getDashboard({}).subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.toast.error(res.message, 'Error')
        }
        this.totalOrders = res.totalOrders
        this.totalCustomers = res.totalCustomers
        this.totalProducts = res.totalProducts
      },
      error: (e:any) => {
        console.log(e)
        this.spinner.hide()
        this.toast.error(e.error.message)
      },
      complete: () => { this.spinner.hide() }
    }
    )
  }

}
