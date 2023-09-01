import { getDuration } from "./timeUtils";

describe("getDuration function", () => {
  it("should format milliseconds to a duration string", () => {
    expect(getDuration(60000)).toBe("01:00");
    expect(getDuration(3600000)).toBe("1:00:00");
    expect(getDuration(7261000)).toBe("2:01:01");
    expect(getDuration(1000)).toBe("00:01");
  });

  it("should format single-digit minutes and seconds with leading zero", () => {
    expect(getDuration(61000)).toBe("01:01");
    expect(getDuration(360000)).toBe("06:00");
  });

  it("should not include hours if duration is less than 1 hour", () => {
    expect(getDuration(59999)).toBe("00:59");
    expect(getDuration(3599999)).toBe("59:59");
  });

  it('should return "00:00:00" if input is zero', () => {
    expect(getDuration(0)).toBe("00:00");
  });
});
