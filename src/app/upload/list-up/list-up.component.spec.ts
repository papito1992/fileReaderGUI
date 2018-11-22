import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUpComponent } from './list-up.component';

describe('ListUpComponent', () => {
  let component: ListUpComponent;
  let fixture: ComponentFixture<ListUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
