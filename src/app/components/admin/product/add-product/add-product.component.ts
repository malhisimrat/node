import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { SubcategoryService } from 'src/app/services/subcategory/subcategory.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private toast: ToastrService, private router: Router, private categoryService: CategoryService, private subcategoryService: SubcategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllList()
  }

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    product_image: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
    subcategoryId: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required,Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]),
  });

  public submit() {
    this.spinner.show()
    const formData = new FormData()
    formData.append("name",this.formData.get("name")?.value)
    formData.append("categoryId",this.formData.get("categoryId")?.value)
    formData.append("subcategoryId",this.formData.get("subcategoryId")?.value)
    formData.append("price",this.formData.get("price")?.value)
    formData.append("product_image",this.formData.get("product_image")?.value)
    this.productService.addProduct(formData).subscribe({
      next: (res:any) => {
        if (!res.success) {
          this.toast.error(res.message, 'Error')
        }else{
          this.toast.success(res.message, 'Success')
          this.router.navigateByUrl('/product/view')
        }        
      },
      error: (e) => {
        this.spinner.hide()
        this.toast.error(e.error.message)
      },
      complete: () => { this.spinner.hide() }
    }
    )
  }

  addPic(event:any){
    if(event.target.files.length > 0)
    {
      if (event.target.files && event.target.files[0]) {
        this.formData.patchValue({
          product_image: event.target.files[0]
        })
      }
    }
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

  subCatDataList: any
  getSubCatAllList(event:any) {
    this.spinner.show()
    this.subcategoryService.viewSubcategory({categoryId:event.target.value}).subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.toast.error(res.message, 'Error')
        }
        this.subCatDataList = res.data
      },
      error: (e:any) => {
        this.spinner.hide()
        this.toast.error(e.error.message)
      },
      complete: () => { this.spinner.hide() }
    }
    )
  }

}
