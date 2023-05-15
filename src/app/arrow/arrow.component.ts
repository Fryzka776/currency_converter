import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Arrow } from '../interfaces/arrow-interface';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent implements OnInit {

constructor() {}

@Input() message?: Arrow;

  ngOnInit(): void{
  }
}
