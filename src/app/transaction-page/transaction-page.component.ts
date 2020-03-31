import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../shared/services/transactions.service';
import { Transaction } from '../shared/services/interfaces';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.scss']
})
export class TransactionPageComponent implements OnInit {
  loading = false
  transactions: Transaction[] = [] 
  constructor(private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.loading = true
    this.transactionService.fetch().subscribe(transactions =>{
      this.loading = false
      this.transactions = transactions
      console.log('Transactions', transactions)
    })
  }
}
