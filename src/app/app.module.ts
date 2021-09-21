import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutModule } from './about/about.module';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';
import { TranslationService } from './shared/translation.service';
import { TranslatePipe } from './shared/translate.pipe';


  
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    TodosComponent,
    TranslatePipe
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
    SharedModule
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
