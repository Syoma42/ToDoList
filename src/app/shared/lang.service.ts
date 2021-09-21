import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService implements OnInit {

  constructor( public http: HttpClient ) { }

  ngOnInit(): void {
    this.setDefaultLang();
  }

  getRuLang(): Observable<object> {
    return this.http.get<Object>('assets/ru.json');
  }

  getEnLang(): Observable<object> {
    return this.http.get<Object>('assets/en.json')
  }

  setDefaultLang() {
    const lang = navigator.language;
    if (lang === 'ru') {
      this.getRuLang();
    } else {
      this.getEnLang();
    }
  }

}
