import { Component } from '@angular/core';
import { TranslationService } from '../shared/translation.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 constructor(translationService: TranslationService) {}
}