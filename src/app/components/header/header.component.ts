import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  

  constructor (public translateService: TranslateService) {
    console.log('yo')
  }
  
  
  changeLang(lang: string): void {
    
    this.translateService.use(lang);
  }

}
