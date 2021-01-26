import { Component } from '@angular/core';
import { StateManagerService } from './global-services/state-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog-app-frontend';
  isLoading: boolean = false;
  constructor(private _stateManager: StateManagerService) {
    this._stateManager.loader.subscribe((isLoaderShow: boolean) => {
      this.isLoading = isLoaderShow;
    });
    if (localStorage.getItem('token')) {
      // this._stateManager.isSignedIn = true;
    }
  }
}
