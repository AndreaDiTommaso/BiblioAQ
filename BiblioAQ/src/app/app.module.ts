import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
//import {SplashScreen} from '@ionic-native/splash-screen/ngx';
//import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {IonicStorageModule} from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// @ts-ignore
@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        IonicStorageModule.forRoot({
            name: 'biblioaq__db',
            driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage, 'websql']
        }),
        AppRoutingModule],
    providers: [

        //StatusBar,
        //SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
