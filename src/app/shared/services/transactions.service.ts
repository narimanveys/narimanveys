import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction, SearchUser } from './interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TransactionsService {
    constructor(private http: HttpClient){

    }

    //type trans_token
    fetch():Observable<Transaction[]>{
        return this.http.get<any>('http://193.124.114.46:3001/api/protected/transactions').pipe((map(x => x.trans_token)))
    }

    getUserList(filter: string) {
        return this.http.post<SearchUser[]>('http://193.124.114.46:3001/api/protected/users/list', {filter})
    }
}