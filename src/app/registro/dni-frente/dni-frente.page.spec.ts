import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DniFrentePage } from './dni-frente.page';

describe('DniFrentePage', () => {
  let component: DniFrentePage;
  let fixture: ComponentFixture<DniFrentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DniFrentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DniFrentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
