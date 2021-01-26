import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StateManagerService } from '../global-services/state-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isCollapsed = false;
  public isLoggedIn: boolean = false;
  @ViewChild('dropdown', { static: true }) dropdown: ElementRef;
  constructor(
    private _stateManager: StateManagerService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    if (window) {
      localStorage.getItem('token')
        ? (this.isLoggedIn = true)
        : (this.isLoggedIn = false);
    }
    this._stateManager.isSignedIn.subscribe((loggedIn: Boolean) => {
      if (loggedIn) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      console.log(this.dropdown.nativeElement.classList.add('show'));
    } else {
      console.log(this.dropdown.nativeElement.classList.remove('show'));
    }
  }
  Signout() {
    localStorage.clear();
    this._stateManager.isSignedIn.next(false);
    this._route.navigate(['/']);
  }
}
