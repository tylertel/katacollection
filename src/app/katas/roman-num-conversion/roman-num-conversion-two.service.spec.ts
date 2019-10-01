import { TestBed } from "@angular/core/testing";

import { RomanNumConversionTwoService } from "./roman-num-conversion-two.service";

describe("RomanNumConversionTwoService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should convert 1 to I", () => {
    const service: RomanNumConversionTwoService = TestBed.get(
      RomanNumConversionTwoService
    );
    expect(service.convert(1)).toBe("I");
  });
  
});