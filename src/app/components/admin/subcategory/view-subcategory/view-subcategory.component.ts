import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SubcategoryService } from 'src/app/services/subcategory/subcategory.service';

@Component({
  selector: 'app-view-subcategory',
  templateUrl: './view-subcategory.component.html',
  styleUrls: ['./view-subcategory.component.css']
})
export class ViewSubcategoryComponent implements OnInit {

  BaseUrl: any;

  constructor(private toast: ToastrService, private subcategoryService: SubcategoryService, private spinner: NgxSpinnerService,private trusturl: DomSanitizer,@Inject('BASE_URL_IMAGE') _imageurl: any) {this.BaseUrl = _imageurl }

  ngOnInit(): void {
    this.getAllList()
  }

  dataList: any
  getAllList() {
    this.spinner.show()
    this.subcategoryService.viewSubcategory({}).subscribe({
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
