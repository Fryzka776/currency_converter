import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  errorHandle(status: number): string{
    let message: string = '';
    switch(status){
      case 400:
        message = "Błąd";
        break
      case 404:
        message = "Nie znaleziono strony";
        break;
      case 429:
        message = "Wykorzystano wszystkie requesty";
        break;
      case 500:
        message = "Błąd serwera";
        break;
    }
    return message;
  }
}
