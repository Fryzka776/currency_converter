import { Injectable } from '@angular/core';
import { Symbol } from '../../interfaces/symbol-interface'
import { ConvertData } from '../../interfaces/convert-data-interface';
import { SymbolDictionary } from 'src/app/dictionary/symbol';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor() { }

  createHeader(): Headers{
    const myHeaders = new Headers();
    myHeaders.append("apikey", "JWJcfhnyncVWFqQbnWhdJ6FKPZtusMMB");
    return myHeaders;
  }

  createRequest(): RequestInit{
    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
      headers: this.createHeader()
    };
    return requestOptions;
  }

  async getSymbols(): Promise<Symbol[]>{
    const translateDictionary: SymbolDictionary = new SymbolDictionary();
    const response =  await fetch("https://api.apilayer.com/exchangerates_data/symbols", this.createRequest());
    const result = await response.json();
    console.log(result);

    const codeFields = Object.getOwnPropertyNames(result.symbols);

    let symbols: Symbol[] = [];
    
    symbols= codeFields.map((codeSymbol)=>{
      return {
        code: codeSymbol, 
        name: translateDictionary.symbol.find(x=>x.code == codeSymbol)?.name ?? result.symbols[codeSymbol]
      } 
    });

    return symbols;
  }


  async convert(from: string, to: string, amount: number): Promise<ConvertData>{
    const response =  await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, this.createRequest());
    const result = await response.json();

    return {from: result.query.from, to: result.query.to, amount: result.query.amount, result: result.result};
  }
  
}
