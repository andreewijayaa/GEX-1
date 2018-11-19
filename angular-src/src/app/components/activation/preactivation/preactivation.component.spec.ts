import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreactivationComponent } from './preactivation.component';

describe('PreactivationComponent', () => {
  let component: PreactivationComponent;
  let fixture: ComponentFixture<PreactivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreactivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
