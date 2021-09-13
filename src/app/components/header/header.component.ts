import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  

  constructor (public translateService: TranslateService) {}

  
  changeLang(): any {

    if (this.translateService.currentLang === 'en') { 
      return this.translateService.use('ru') 
    } else return this.translateService.use('en')
  }


}
