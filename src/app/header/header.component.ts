import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isCollapsed = false;
  @ViewChild('dropdown', { static: true }) dropdown: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      console.log(this.dropdown.nativeElement.classList.add('show'));
    } else {
      console.log(this.dropdown.nativeElement.classList.remove('show'));
    }
  }
}
