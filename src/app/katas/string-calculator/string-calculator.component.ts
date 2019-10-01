import { Component, OnInit } from '@angular/core';
import { StringCalculatorService } from './string-calculator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-string-calculator',
  templateUrl: './string-calculator.component.html',
  styleUrls: ['./string-calculator.component.scss']
})
export class StringCalculatorComponent implements OnInit {

  constructor(private _stringCalculatorSvc:StringCalculatorService) { }

  public inputString:string;
  public output: Observable<string>;

  ngOnInit() {
    this.output = this._stringCalculatorSvc.output;
  }

  doAdd(){
    this._stringCalculatorSvc.DoAdd(this.inputString);
  }

}
