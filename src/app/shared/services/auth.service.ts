import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, RegisterUser } from './interfaces';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'
import { UserInfoService } from './userinfo.service';

@Injectable(
    {providedIn: 'root'}
)
export class AuthService{
    private id_token = null

    constructor(private http: HttpClient, private userInfoService: UserInfoService){

    }
    register(registerUser: RegisterUser): Observable<RegisterUser>{
        return this.http.post<RegisterUser>('http://193.124.114.46:3001/users',registerUser)
    }

    login(user: User): Observable<{id_token: string}>{
        return this.http.post<{id_token: string}>('http://193.124.114.46:3001/sessions/create', user)
            .pipe(
                tap( 
                    ({id_token})=>{
                        var bearer = new String("Bearer ")
                        //this is without bearer
                        //localStorage.setItem('id_token',id_token)
                        //this.setToken(id_token)

                        //and this is concat attempt 
                        localStorage.setItem('auth-token',bearer.concat(id_token))
                        this.setToken(bearer.concat(id_token))
                        this.userInfoService.handleUserAuthorize()
                    }
                )
            )
    }

    setToken(token: string){
        this.id_token=token
    }

    getToken(): string{
        return this.id_token
    }

    isAuthenticated(): boolean {
        return !!this.id_token
    }

    logout(){
        this.setToken(null)
        localStorage.clear()
    }
}