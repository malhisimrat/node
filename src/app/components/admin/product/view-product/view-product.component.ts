import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product/product.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  BaseUrl: any;
  userData:any

  constructor(private toast: ToastrService, private productService: ProductService, private spinner: NgxSpinnerService,private trusturl: DomSanitizer,@Inject('BASE_URL_IMAGE') _imageurl: any, private userdata: UserDataService) {this.BaseUrl = _imageurl }

  ngOnInit(): void {
    this.getAllList()
    this.userData = JSON.parse(this.userdata.getUserData() ?? '')

  }

  dataList: any
  getAllList() {
    this.spinner.show()
    this.productService.viewProduct({}).subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.toast.error(res.message, 'Error')
        }
        this.dataList = res.data
      },
      error: (e:any) => {
        this.spinner.hide()
        this.toast.error(e.error.message)
      },
      complete: () => { this.spinner.hide() }
    }
    )
  }

  getSanitizeUrl(url: string){
    return this.trusturl.bypassSecurityTrustUrl(this.BaseUrl+url)
  }

}
