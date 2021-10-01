import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../shared/translation.service';
import { SharedModule } from '../shared/shared.module';






@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'about/info', component: AboutComponent }
    ]),
    SharedModule
  ],
  providers:[TranslationService]
})
export class AboutModule { }
