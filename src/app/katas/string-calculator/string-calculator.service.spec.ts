import { TestBed } from "@angular/core/testing";

import { StringCalculatorService } from "./string-calculator.service";

xdescribe("StringCalculatorService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should output '0' if given empty string", () => {
    const service: StringCalculatorService = TestBed.get(
      StringCalculatorService
    );
    expect(service.Add("")).toBe("0");
  });

  
});
