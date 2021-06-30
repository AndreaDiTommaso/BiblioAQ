import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrenotazioneAccessoPage } from './prenotazione-accesso.page';

describe('PrenotazioneAccessoPage', () => {
  let component: PrenotazioneAccessoPage;
  let fixture: ComponentFixture<PrenotazioneAccessoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotazioneAccessoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrenotazioneAccessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
