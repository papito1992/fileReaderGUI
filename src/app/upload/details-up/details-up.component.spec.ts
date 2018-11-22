import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUpComponent } from './details-up.component';

describe('DetailsUpComponent', () => {
  let component: DetailsUpComponent;
  let fixture: ComponentFixture<DetailsUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
