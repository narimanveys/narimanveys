import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { LoginPageComponent } from './login-page/login-page.component'
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component'
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component'
import { RegisterPageComponent } from './register-page/register-page.component'
import { AuthGuard } from './shared/classes/auth.guard'
import { OverviewPageComponent } from './overview-page/overview-page.component'
import { TransactionPageComponent } from './transaction-page/transaction-page.component'
import { TransactionhistoryPageComponent } from './transactionhistory-page/transactionhistory-page.component'
import { CreatetransactionPageComponent } from './createtransaction-page/createtransaction-page.component'

const routes: Routes = [
    {path: '', component: AuthLayoutComponent, children: [
        {path: '', redirectTo: '/login', pathMatch: 'full'},
        {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
        {path: 'register', component: RegisterPageComponent, pathMatch: 'full'}
    ]},
    {path: '', component: SiteLayoutComponent, canActivate:[AuthGuard], children: [
        {path:'overview', component: OverviewPageComponent, pathMatch: 'full'},
        {path:'transactionhistory', component: TransactionhistoryPageComponent, pathMatch: 'full'},
        {path:'transactions', component: TransactionPageComponent, pathMatch: 'full'},
        {path:'create', component: CreatetransactionPageComponent, pathMatch: 'full'}
    ]}

]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}