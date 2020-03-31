import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInteceptor } from './shared/classes/token.interceptor';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { TransactionhistoryPageComponent } from './transactionhistory-page/transactionhistory-page.component';
import { CreatetransactionPageComponent } from './createtransaction-page/createtransaction-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCardComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    OverviewPageComponent,
    TransactionPageComponent,
    LoaderComponent,
    TransactionhistoryPageComponent,
    CreatetransactionPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInteceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
