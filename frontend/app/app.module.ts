import { NgModule }            from '@angular/core';
import { BrowserModule  }      from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent }        from './app.component';
import { HomeComponent }       from './home.component';
import { routing,
         appRoutingProviders } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers:    [
        appRoutingProviders,
        AUTH_PROVIDERS
    ],
    imports:      [
        BrowserModule,
        HttpModule,
        routing
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
