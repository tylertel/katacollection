import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StringCalculatorService {
  //for UI only, ignore this property
  public output: Subject<string> = new Subject();

  constructor() {}

  //for UI only, ignore this method
  DoAdd(numberString: string) {
    this.output.next(this.Add(numberString));
  }

  Add(numberString: string): string {
    //KATA STRING CALC WORKSPACE
    return "";
  }
}
