import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private toast: ToastrService, private router: Router, private categoryService: CategoryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.getDataById()
  }

  formData = new FormGroup({
    _id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    category_image: new FormControl(''),
  });

  data:any;id:any;
  getDataById(){
    this.spinner.show()
    this.categoryService.singleCategory({_id:this.id}).subscribe({
        next: (res:any) => {
          if (!res.success) {
            this.toast.error(res.message, 'Error')
          }
          this.data = res.data
          this.formData.patchValue({_id:this.id})
          this.formData.patchValue({name:this.data.name})
          this.formData.patchValue({status:this.data.status})
        },
        error: (e) => {
          this.spinner.hide()
          this.toast.error(e.error.message)
        },
        complete: () => { this.spinner.hide() }
      }
    )
  }

  public submit() {
    this.spinner.show()
    const formData = new FormData()
    formData.append("_id",this.formData.get("_id")?.value)
    formData.append("status",this.formData.get("status")?.value)
    formData.append("name",this.formData.get("name")?.value)
    formData.append("category_image",this.formData.get("category_image")?.value)
    this.categoryService.updateCategory(formData).subscribe({
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
