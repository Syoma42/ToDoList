import { Injectable } from '@angular/core';


export class TranslationSet {
  public languange: string
  public values: { [key: string]: string } = {}
}

@Injectable()

export class TranslationService {
  public languages = ['en', 'ru']

  public language = localStorage.getItem('selectedLang') || 'en'

  private dictionary: { [key: string]: TranslationSet } = {
    en: {
      languange: 'en',
       values: {
        'todoList' : 'Todo List',
        'about' : 'About',
        'languages' : 'Choose language',
        'todoPlaceholder' : 'Type the text...',
        'addTodoBtn' : 'Add Todo',
        'removeTodoBtn' : 'Remove',
        'aboutInfo' : 'This page is used to show routing, thank you for the attention',
        
      }
    },
    ru: {
      languange: 'ru',
      values: {
        'todoList' : 'Список дел',
        'about' : 'О нас',
        'languages' : 'Выберите язык',
        'todoPlaceholder' : 'Введите текст...',
        'addTodoBtn' : 'Добавить запись',
        'removeTodoBtn' : 'Удалить',
        'aboutInfo' : 'Эта страница предназначена, чтобы показать роутинг, спасибо за внимание',
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

