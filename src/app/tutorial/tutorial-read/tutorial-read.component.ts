import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../models/tutorial.model';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../actions/tutorial.actions';

@Component({
  selector: 'app-tutorial-read',
  templateUrl: './tutorial-read.component.html',
  styleUrls: ['./tutorial-read.component.scss']
})
export class TutorialReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  delete(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  ngOnInit() {
  }


}
