import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EpisodesComponent } from './episodes.component';

describe('EpisodesComponent', () => {
  let component: EpisodesComponent;
  let fixture: ComponentFixture<EpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
