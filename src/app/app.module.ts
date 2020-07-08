import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ThingsModule} from './pages/things/things.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbDialogModule, NbThemeModule} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import {NebularModule} from './shared/nebular/nebular.module';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AngularFireDatabaseModule,
    ThingsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbDialogModule.forRoot(),
    NebularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
