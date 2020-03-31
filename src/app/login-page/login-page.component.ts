import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaterialService } from '../shared/classes/material.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub : Subscription
  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)])
    })
    this.route.queryParams.subscribe((params: Params)=> {
      if(params['registered']){
        //now you can enter the system with your data 
        MaterialService.toast('You will be redirected to main page as authorized user')
        
      } else if(params['accessDenied']){
        //please authorize in system 
        MaterialService.toast('Please authorize in system')
      }else if(params['sessionFiled']){
        MaterialService.toast('Please enter the system again, your session expired')
      }
    })
  }

  ngOnDestroy()  {
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }

  onSubmit(){
    // const user={
    //   email: this.form.value.email,
    //   password: this.form.value.password
    // }
    this.form.disable()
    this.aSub= this.auth.login(this.form.value).subscribe(
      ()=>this.router.navigate(['/overview']),
      error => {
        MaterialService.toast(error.error)
        console.warn(error)
      this.form.enable
      }
    )
  }

}
