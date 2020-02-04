import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmsCodePage } from './sms-code.page';

describe('SmsCodePage', () => {
  let component: SmsCodePage;
  let fixture: ComponentFixture<SmsCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmsCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
