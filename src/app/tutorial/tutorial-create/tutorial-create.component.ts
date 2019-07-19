import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Tutorial } from '../../models/tutorial.model'
import * as TutorialActions from '../../actions/tutorial.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tutorial-create',
  templateUrl: './tutorial-create.component.html',
  styleUrls: ['./tutorial-create.component.scss']
})
export class TutorialCreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) )
  }

  ngOnInit() {
  }

}
