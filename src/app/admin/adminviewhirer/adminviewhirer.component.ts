import { Component, Inject, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'
import { DomSanitizer } from '@angular/platform-browser';
import { RenterService } from 'src/app/shared/renter/renter.service';
import Swal from 'sweetalert2'
import { HirerService } from 'src/app/shared/hirer/hirer.service';

@Component({
  selector: 'app-adminviewhirer',
  templateUrl: './adminviewhirer.component.html',
  styleUrls: ['./adminviewhirer.component.css']
})
export class AdminviewhirerComponent implements OnInit {

  imageurl : any
  constructor(private hirer : HirerService, private spinner : NgxSpinnerService,private sanitizer : DomSanitizer,@Inject('imageurl') _imageurl:any) {
    this.imageurl = _imageurl
  }

  ngOnInit(): void {
    this.getall(null)
  }

  getimagepath(image:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageurl+image)
  }
  
  data : any
  getall(data:any){
    this.spinner.show()
    this.hirer.getall(data).subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.data =res.data
      },
      error:(err:any)=>{
        this.spinner.hide()
      }
    })
  }

}
