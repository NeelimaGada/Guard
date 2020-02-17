import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
confirm1(){
return confirm("Are u Sure u want to Navigate from this page")
}

  ngOnInit() {
  }

}
