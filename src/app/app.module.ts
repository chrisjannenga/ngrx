import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialReadComponent } from './tutorial/tutorial-read/tutorial-read.component';
import { TutorialCreateComponent } from './tutorial/tutorial-create/tutorial-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialReadComponent,
    TutorialCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial: reducer
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
