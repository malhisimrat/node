import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private toast: ToastrService, private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category_image: new FormControl('', [Validators.required]),
  });

  public submit() {
    this.spinner.show()
    const formData = new FormData()
    formData.append("name",this.formData.get("name")?.value)
    formData.append("category_image",this.formData.get("category_image")?.value)
    this.categoryService.addCategory(formData).subscribe({
      next: (res:any) => {
        if (!res.success) {
          this.toast.error(res.message, 'Error')
        }else{
          this.toast.success(res.message, 'Success')
          this.router.navigateByUrl('/category/view')
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
          category_image: event.target.files[0]
        })
      }
    }
  }

}
