import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateManagerService {
  constructor() {}
  // public isSignedIn: boolean = false;
  public loader: Subject<boolean> = new Subject();
  public isSignedIn: Subject<boolean> = new Subject();
}
