import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { OrderServiceService } from 'src/app/services/orders/order-service.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  BaseUrl: any;
  userData:any

  constructor(private toast: ToastrService, private _orderService: OrderServiceService, private spinner: NgxSpinnerService,private trusturl: DomSanitizer,@Inject('BASE_URL_IMAGE') _imageurl: any, private userdataservice: UserDataService) {this.BaseUrl = _imageurl }

  ngOnInit(): void {
    this.getAllOrders()
    this.userData = JSON.parse(this.userdataservice.getUserData() ?? '')
  }

  dataList: any
  getAllOrders() {
    console.log(this.BaseUrl)
    this.spinner.show()
    this._orderService.allOrders({}).subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.toast.error(res.message, 'Error')
        }
        this.dataList = res.data
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

  cancelOrder(id:any){
    this.spinner.show()
    this._orderService.updateOrder({_id: id, orderStatus: 5}).subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.toast.error(res.message, 'Error')
        }
        else{
          this.toast.success(res.message, 'Success')
          this.getAllOrders()
        }
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
