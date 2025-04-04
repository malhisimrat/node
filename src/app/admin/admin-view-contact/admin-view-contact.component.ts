import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { BicycleRequestService } from 'src/app/shared/bicycle-request/bicycle-request.service';
import { ContactService } from 'src/app/shared/contact/contact.service';

@Component({
  selector: 'app-admin-view-contact',
  templateUrl: './admin-view-contact.component.html',
  styleUrls: ['./admin-view-contact.component.css']
})
export class AdminViewContactComponent implements OnInit {

  constructor(private contact : ContactService, private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.getall(null)
  }

  data : any
  getall(data:any){
    this.spinner.show()
    this.contact.getall(data).subscribe({
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
