import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostactivationComponent } from './postactivation.component';

describe('PostactivationComponent', () => {
  let component: PostactivationComponent;
  let fixture: ComponentFixture<PostactivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostactivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
