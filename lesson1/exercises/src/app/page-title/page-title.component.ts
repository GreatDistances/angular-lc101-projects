import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  title = "Matt Wicks 29.7 Exercises, Angular Pt 1";

  constructor() { }

  ngOnInit() {
  }

}
