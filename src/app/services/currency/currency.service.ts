import { Injectable } from '@angular/core';
import { Symbol } from '../../interfaces/symbol-interface'
import { ConvertData } from '../../interfaces/convert-data-interface';
import { SymbolDictionary } from 'src/app/dictionary/symbol';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private errorService: ErrorService) { }

  createHeader(): Headers{
    const myHeaders = new Headers();
    myHeaders.append("apikey", "sZh1t3DCFEqJmKjd4heqB6fpmeE1hbqC");
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
    try{
      const translateDictionary: SymbolDictionary = new SymbolDictionary();
      const response =  await fetch("https://api.apilayer.com/exchangerates_data/symbols", this.createRequest());
      const message: string = this.errorService.errorHandle(response.status);
      if(message == ''){
        const result = await response.json();
    
        const codeFields: string[] = Object.getOwnPropertyNames(result.symbols);
    
        let symbols: Symbol[] = [];
        
        symbols= codeFields.map((codeSymbol)=>{
          return {
            code: codeSymbol, 
            name: translateDictionary.symbol.find(x=>x.code == codeSymbol)?.name ?? result.symbols[codeSymbol]
          } 
        });
        return symbols;
      }else{
        const symbol: Symbol[] = [{code: '',name:''}];
        return symbol;
      }
    }
    catch(err: any){
      const error = err.response;
      return error;
    }
    
  }

  async convert(from: string, to: string, amount: number): Promise<ConvertData>{
    const response =  await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, this.createRequest());
    const result = await response.json();

    return {from: result.query.from, to: result.query.to, amount: result.query.amount, result: result.result};
  }
  
}
