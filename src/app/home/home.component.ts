import { Component, OnInit } from '@angular/core';
import { JsService } from '../shared/js/js.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private js : JsService) { }

  ngOnInit(): void {
    this.js.callJsClass()
  }

}
