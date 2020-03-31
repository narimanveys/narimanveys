import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetransactionPageComponent } from './createtransaction-page.component';

describe('CreatetransactionPageComponent', () => {
  let component: CreatetransactionPageComponent;
  let fixture: ComponentFixture<CreatetransactionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetransactionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetransactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
