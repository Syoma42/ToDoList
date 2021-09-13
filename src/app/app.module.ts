import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutModule } from './about/about.module';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AboutComponent } from './about/about.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
  
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AboutModule,
    RouterModule.forRoot([
      { path: 'home', component: TodosComponent },
      { path: 'welcome', component: WelcomeComponent },
      // { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
         provide: TranslateLoader,
         useFactory: HttpLoaderFactory,
         deps: [HttpClient]
       }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
