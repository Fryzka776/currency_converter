import { Component, OnInit } from '@angular/core';
import { Arrow } from '../interfaces/arrow-interface';

@Component({
  selector: 'app-converter-info',
  templateUrl: './converter-info.component.html',
  styleUrls: ['./converter-info.component.scss']
})
export class ConverterInfoComponent implements OnInit {

  constructor() {}
   ngOnInit(): void {}

  message: Arrow[] = [
    {
      text: 'Napisz kwotę',
      number: 1
    },
    {
      text: 'Wybierz waluty',
      number: 2
    },
    {
      text: 'Kliknij',
      number: 3
    },
    {
      text: 'Rezultat',
      number: 4
    },
  ];

}
