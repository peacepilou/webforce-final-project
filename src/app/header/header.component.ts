import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo: string = "/assets/EC_logocombine_bleu_1000px.png";

  constructor() { }

  ngOnInit(): void {
  }

}
