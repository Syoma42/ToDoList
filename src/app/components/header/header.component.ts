import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslationService } from 'src/app/shared/translation.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements DoCheck {
  
  languageFormControl = new FormControl(this.translationService.language);

  constructor(private translationService: TranslationService) {
    this.languageFormControl.valueChanges.subscribe( language => this.translationService.language = language )

  }

  
  ngDoCheck(): void {
    localStorage.setItem('selectedLang', this.languageFormControl.value)
    console.log(this.languageFormControl.value)
  }
}
