import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MaterialService } from '../../classes/material.service';
import { UserInfo } from '../../services/interfaces';
import { UserInfoService } from '../../services/userinfo.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit, AfterViewInit {

  @ViewChild('floating') floatingRef: ElementRef
  links=[
    {url:'/overview', name: 'Transactions overview'},
    {url:'/transactionhistory', name: 'History'}, 
    {url:'/transactions', name: 'Transactions'},
    {url:'/create', name: 'Create Transactions'} 
  ]

  userInfo: UserInfo 

  constructor(private auth: AuthService, private router: Router, private userInfoService: UserInfoService) { }

  ngOnInit(){
    this.userInfoService.userInfoSubject.subscribe(user=>{
      this.userInfo = user
    })
  }

  ngAfterViewInit(){
    MaterialService.initializeFloatingButton(this.floatingRef)
  }

  logout(event: Event){
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
