import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
confirm1(){
return confirm("Are u Sure u want to Navigate from this page")
}

  ngOnInit() {
  }

}
