import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuotesComponent } from './quotes.component';

describe('QuotesComponent', () => {
  let component: QuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
