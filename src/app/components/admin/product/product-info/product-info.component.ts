import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { OrderServiceService } from 'src/app/services/orders/order-service.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  BaseUrl: any;
  userData:any

  constructor(private toast: ToastrService, private productService: ProductService, private spinner: NgxSpinnerService,private trusturl: DomSanitizer,@Inject('BASE_URL_IMAGE') _imageurl: any, private userdata: UserDataService, private route: ActivatedRoute, private _orderService: OrderServiceService, private router: Router) {this.BaseUrl = _imageurl }

  id:any

  getSanitizerUrl(url: string){
    return this.trusturl.bypassSecurityTrustUrl(this.BaseUrl+url)
  }

  formModel = {
    address: '',
    productId: '',
    userId: ''
  }

  ngOnInit(): void {
    this.userData = JSON.parse(this.userdata.getUserData() ?? '')

    this.id = this.route.snapshot.paramMap.get('id')
    this.formModel.productId = this.id
    this.formModel.userId = this.userData.data._id
    this.getProduct()
  }

  productData:any

  getProduct(){
    this.spinner.show()
    this.productService.singleProduct({_id:this.id}).subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.toast.error(res.message, 'Error')
        }
        this.productData = res.data
      },
      error: (e:any) => {
        this.spinner.hide()
        this.toast.error(e.error.message)
      },
      complete: () => { this.spinner.hide() }
    }
    )
  }

  submit(){
    this.spinner.show()
    this._orderService.addOrder(this.formModel).subscribe({
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
        this.spinner.hide()
        this.toast.error(e.error.message)
      },
      complete: () => { this.spinner.hide() }
    })
  }
}
