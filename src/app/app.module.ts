import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { ErrorInterceptorService } from './shared/services/error-interceptor.service';
import { DataStorageService } from './shared/services/data-storage.service';

export function initializeMyApp(dataStorageService: DataStorageService) {
  return (): Promise<any> => {
    return dataStorageService.init();
  };
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    DataStorageService,
    {
      provide: APP_INITIALIZER, useFactory: initializeMyApp, deps: [DataStorageService], multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
