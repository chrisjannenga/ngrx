import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialReadComponent } from './tutorial-read.component';

describe('TutorialReadComponent', () => {
  let component: TutorialReadComponent;
  let fixture: ComponentFixture<TutorialReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
