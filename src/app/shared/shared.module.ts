import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';




@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslatePipe
  ],
  providers: [TranslationService]
})
export class SharedModule { }
