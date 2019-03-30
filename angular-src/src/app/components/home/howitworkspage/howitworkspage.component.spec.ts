import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowitworkspageComponent } from './howitworkspage.component';

describe('HowitworkspageComponent', () => {
  let component: HowitworkspageComponent;
  let fixture: ComponentFixture<HowitworkspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowitworkspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowitworkspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
