import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmissionPagePage } from './submission-page.page';

describe('SubmissionPagePage', () => {
  let component: SubmissionPagePage;
  let fixture: ComponentFixture<SubmissionPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmissionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
