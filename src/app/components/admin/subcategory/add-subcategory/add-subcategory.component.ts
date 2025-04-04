import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category/category.service';
import { SubcategoryService } from 'src/app/services/subcategory/subcategory.service';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private toast: ToastrService, private router: Router, private categoryService: CategoryService, private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.getAllList()
  }

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    subcategory_image: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
  });

  public submit() {
    this.spinner.show()
    const formData = new FormData()
    formData.append("name",this.formData.get("name")?.value)
    formData.append("categoryId",this.formData.get("categoryId")?.value)
    formData.append("subcategory_image",this.formData.get("subcategory_image")?.value)
    this.subcategoryService.addSubcategory(formData).subscribe({
      next: (res:any) => {
        if (!res.success) {
          this.toast.error(res.message, 'Error')
        }else{
          this.toast.success(res.message, 'Success')
          this.router.navigateByUrl('/subcategory/view')
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
          subcategory_image: event.target.files[0]
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

}
