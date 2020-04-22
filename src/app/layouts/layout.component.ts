import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  showMobileMenu = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
