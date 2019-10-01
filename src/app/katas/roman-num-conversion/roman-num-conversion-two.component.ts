import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { map, tap, startWith } from "rxjs/operators";
import { RomanNumConversionTwoService } from "./roman-num-conversion-two.service";

@Component({
  selector: "app-roman-num-conversion-two",
  templateUrl: "./roman-num-conversion-two.component.html",
  styleUrls: ["./roman-num-conversion-two.component.scss"]
})
export class RomanNumConversionTwoComponent implements OnInit {
  constructor(private _RomanNumConversionSvc: RomanNumConversionTwoService) {}
  public output: string;

  formGroup = new FormGroup({
    inputNumber: new FormControl("")
  });

  ngOnInit() {
    this.formGroup.controls.inputNumber.valueChanges
      .pipe(map(x => (this.output = this._RomanNumConversionSvc.convert(x))))
      .subscribe();
  }

  getClass(): string {
    // switch (this.formGroup.controls.inputNumber.value) {
    //   case 3:
    //     return "color-danger";
    //     break;
    //   case 4:
    //     return "color-success";
    //     break;
    //   default:
        return "";
    // }
  }
}
