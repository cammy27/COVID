import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DispneaIndexPage } from './dispnea-index.page';

describe('DispneaIndexPage', () => {
  let component: DispneaIndexPage;
  let fixture: ComponentFixture<DispneaIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispneaIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DispneaIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
