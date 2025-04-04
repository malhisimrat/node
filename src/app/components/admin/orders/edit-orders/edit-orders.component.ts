import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { OrderServiceService } from 'src/app/services/orders/order-service.service';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent implements OnInit {

  id:any

  orderForm = new FormGroup({
    _id: new FormControl(''),
    orderStatus: new FormControl('', Validators.required),
    shipmentUrl: new FormControl(''),
    trackingId: new FormControl('')
  })

  constructor(private toast: ToastrService, private _orderService: OrderServiceService, private spinner: NgxSpinnerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getOrder()
  }

  getOrder(){
    this.spinner.show()
    this._orderService.singleOrders({_id: this.id}).subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.toast.error(res.message, 'Error')
        }
        this.orderForm.patchValue({_id: this.id})
        this.orderForm.patchValue({orderStatus: res.data.orderStatus})
        this.orderForm.patchValue({shipmentUrl: res.data.shipmentUrl})
        this.orderForm.patchValue({trackingId: res.data.trackingId})
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

  submit(){
    this.spinner.show()
    this._orderService.updateOrder(this.orderForm.value).subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.toast.error(res.message, 'Error')
        }
        else{
          this.toast.success(res.message, 'Success')
          this.router.navigateByUrl('/order/view')
        }
      },
      error: (e:any) => {
        console.log(e)
        this.spinner.hide()
        this.toast.error(e.error.message)
      },
      complete: () => { this.spinner.hide() }
    })
  }

}
