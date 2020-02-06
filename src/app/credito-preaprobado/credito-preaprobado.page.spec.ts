import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditoPreaprobadoPage } from './credito-preaprobado.page';

describe('CreditoPreaprobadoPage', () => {
  let component: CreditoPreaprobadoPage;
  let fixture: ComponentFixture<CreditoPreaprobadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoPreaprobadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditoPreaprobadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
