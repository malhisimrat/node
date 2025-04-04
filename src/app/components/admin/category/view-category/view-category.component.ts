import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  BaseUrl: any;

  constructor(private toast: ToastrService, private categoryService: CategoryService, private spinner: NgxSpinnerService,private trusturl: DomSanitizer,@Inject('BASE_URL_IMAGE') _imageurl: any) {this.BaseUrl = _imageurl }

  ngOnInit(): void {
    this.getAllList()
  }

  dataList: any
  getAllList() {
    this.spinner.show()
    this.categoryService.viewCategory({}).subscribe({
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
