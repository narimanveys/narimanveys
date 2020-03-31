import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionsService } from '../shared/services/transactions.service';
import { SearchUser } from '../shared/services/interfaces';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UserInfoService } from '../shared/services/userinfo.service';



@Component({
  selector: 'app-createtransaction-page',
  templateUrl: './createtransaction-page.component.html',
  styleUrls: ['./createtransaction-page.component.scss']
})
export class CreatetransactionPageComponent implements OnInit {
  
  userSearchControl: FormControl
  form: FormGroup =new FormGroup({
    username: new FormControl(null,[Validators.required]),
    amount: new FormControl(null,[Validators.required, Validators.max(this.userService.userInfoSubject.value.balance)])
  })

  searchedUsersList$: Observable<SearchUser[]> = this.form.valueChanges.pipe(
    map(form => form.username), 
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(username => this.transactionService.getUserList(username))
  )
  constructor(private transactionService: TransactionsService, private userService: UserInfoService) { }
  
  ngOnInit(): void {
    
  }

}
