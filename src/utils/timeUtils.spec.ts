import { daysToMilliseconds, daysToSeconds, getDuration } from "./timeUtils";

describe("Time Utility", () => {
  describe("getDuration", () => {
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

  describe("daysToMilliseconds", () => {
    it("should convert 1 day to 24 hours in milliseconds", () => {
      expect(daysToMilliseconds(1)).toBe(24 * 60 * 60 * 1000);
    });

    it("should convert 7 days to 7 * 24 hours in milliseconds", () => {
      expect(daysToMilliseconds(7)).toBe(7 * 24 * 60 * 60 * 1000);
    });

    it("should convert 0 days to 0 milliseconds", () => {
      expect(daysToMilliseconds(0)).toBe(0);
    });
  });

  describe("daysToSeconds", () => {
    it("should convert 1 day to 24 hours in seconds", () => {
      expect(daysToSeconds(1)).toBe(24 * 60 * 60);
    });

    it("should convert 7 days to 7 * 24 hours in seconds", () => {
      expect(daysToSeconds(7)).toBe(7 * 24 * 60 * 60);
    });

    it("should convert 0 days to 0 seconds", () => {
      expect(daysToSeconds(0)).toBe(0);
    });
  });
});
