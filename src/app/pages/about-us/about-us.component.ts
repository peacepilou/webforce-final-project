import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  isChanged: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  changeStyle(): void {
    this.isChanged = !this.isChanged;
  }
 
}
