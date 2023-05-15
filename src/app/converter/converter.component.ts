import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency/currency.service';
import { Symbol } from '../interfaces/symbol-interface';
import { ConvertData } from '../interfaces/convert-data-interface';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit{

  constructor(private currencyService: CurrencyService) {}

  symbols!: Symbol[];
  selectedFirstCurrency?: Symbol;
  selectedSecondCurrency?: Symbol;
  amount?: number;
  convertData?: ConvertData;
  resultValue: string = ' = ';
  isLoad: boolean = false;
  isCalculate: boolean = true;

  async ngOnInit(): Promise<void> {
    // this.symbols = await this.currencyService.getSymbols();
    if(this.symbols){
      this.symbols = this.symbols.map((symbol: any) => {
        return {
          ...symbol,
          displayLabel: symbol.code + ' / ' + symbol.name
        };
      });
    }
    this.isLoad = true;
  }

  async convert(): Promise<void>{
    if(this.selectedFirstCurrency && this.selectedSecondCurrency && this.amount){
      this.isCalculate=false;
      this.convertData = await this.currencyService.convert(this.selectedFirstCurrency.code, this.selectedSecondCurrency.code, this.amount);
      const result = this.convertData.result.toFixed(2);
      this.resultValue = `${this.convertData.amount} ${this.convertData.from} = ${result} ${this.convertData.to}`;
      this.isCalculate = true;
    }
  }


  temp?: Symbol;
  swapData(): void{
    this.temp = this.selectedFirstCurrency;
    this.selectedFirstCurrency = this.selectedSecondCurrency;
    this.selectedSecondCurrency = this.temp;
  }
}
