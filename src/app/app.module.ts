import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockService } from './shared/mock/mock-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BookModule } from './book/book.module';
// import { AuthModule } from './auth/auth.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      config: {
        configId: 'angular-2',
        authority: 'http://localhost:8080/realms/demo',
        redirectUrl: 'http://localhost:4200/books',
        postLogoutRedirectUri: 'http://localhost:4200/books',
        clientId: 'angular-2',
        scope: 'openid email profile offline_access', // 'openid profile ' + your scopes
        responseType: 'code',
        // startCheckSession: true,
        // usePushedAuthorisationRequests: true,
        silentRenew: true,
        useRefreshToken: true,
        // logLevel: LogLevel.Debug,
        customParamsAuthRequest: {
          client_secret: 'AfuCsERbIiLVFC6yan3NWKBiWpPaTAWg',
        },
        customParamsCodeRequest: {
          client_secret: 'AfuCsERbIiLVFC6yan3NWKBiWpPaTAWg',
        },
      },
    }),
    AppRoutingModule,
    BookModule,
    MatFormFieldModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService, {
      passThruUnknownUrl: true,
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
