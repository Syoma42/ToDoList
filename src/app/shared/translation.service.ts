import { Injectable } from '@angular/core';


export class TranslationSet {
  public languange: string
  public values: { [key: string]: string } = {}
}

@Injectable()

export class TranslationService {
  public languages = ['en', 'ru']

  public language = 'en'

  private dictionary: { [key: string]: TranslationSet } = {
    en: {
      languange: 'en',
       values: {
        'todoList' : 'TODO LIST',
      }
    },
    ru: {
      languange: 'ru',
      values: {
        'todoList' : 'Список дел',
      },
    },
  };

  constructor() { }

  translate(value: string): any { // Здесь будет стринг)) 
    if (this.dictionary[this.language] != null) {
        return this.dictionary[this.language].values[value];
    }
  }
}

