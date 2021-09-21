import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from './lang.service';



@NgModule({
  declarations: [LangService],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
