import { Component } from '@angular/core';
import { TranslationService } from 'src/app/shared/translation.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent {
  
  constructor(private translationService: TranslationService) {}

}
