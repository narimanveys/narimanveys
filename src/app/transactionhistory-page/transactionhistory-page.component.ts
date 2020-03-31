import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../shared/services/transactions.service';
import { Transaction } from '../shared/services/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transactionhistory-page',
  templateUrl: './transactionhistory-page.component.html',
  styleUrls: ['./transactionhistory-page.component.scss']
})
export class TransactionhistoryPageComponent implements OnInit {
  
  transactions$: Observable<Transaction[]>
  constructor(private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.transactions$= this.transactionService.fetch()
  }

}
