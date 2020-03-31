import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionhistoryPageComponent } from './transactionhistory-page.component';

describe('TransactionhistoryPageComponent', () => {
  let component: TransactionhistoryPageComponent;
  let fixture: ComponentFixture<TransactionhistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionhistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionhistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
