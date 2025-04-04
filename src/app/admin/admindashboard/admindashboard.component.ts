import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from 'src/app/shared/dashboard/dashboard.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  
  totalBicycleRequests = 0
  totalCustomers = 0
  totalProducts = 0

  constructor(private dashboard : DashboardService, private spinner :NgxSpinnerService) { }

  ngOnInit(): void {
    this.getdashboard()
  }

  data : any
  getdashboard(){
    this.spinner.show()
    this.dashboard.dashbaord().subscribe({
      next:(res:any)=>{
        this.spinner.hide()
        this.totalBicycleRequests =res.totalBicycleRequests
        this.totalCustomers =res.totalCustomers
        this.totalProducts =res.totalProducts
      },
      error:(err:any)=>{
        this.spinner.hide()
      }
    })
  }
}
