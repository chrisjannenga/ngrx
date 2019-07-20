import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {User} from './models/user.model';
import {AppState} from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngrx-auth';
  users: Observable<User[]>;

    constructor(private store: Store<AppState>) {
      this.users = this.store.select('user');
    }
  ngOnInit(): void {
  }
}
