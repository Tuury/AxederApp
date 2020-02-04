import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DniDorsoPage } from './dni-dorso.page';

describe('DniDorsoPage', () => {
  let component: DniDorsoPage;
  let fixture: ComponentFixture<DniDorsoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DniDorsoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DniDorsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
