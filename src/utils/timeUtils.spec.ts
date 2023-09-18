import { millisecondsToDuration, millisecondsToSeconds } from "./timeUtils";

describe("Time Utility", () => {
  describe("millisecondsToDuration", () => {
    it("should convert milliseconds to formatted duration (no hours)", () => {
      expect(millisecondsToDuration(30000)).toBe("00:30");
    });

    it("should convert milliseconds to formatted duration (with hours)", () => {
      expect(millisecondsToDuration(3723000)).toBe("1:02:03");
    });

    it("should handle milliseconds greater than 86400000 (1 day)", () => {
      expect(millisecondsToDuration(90061000)).toBe("25:01:01");
    });

    it("should handle milliseconds equal to 0", () => {
      expect(millisecondsToDuration(0)).toBe("00:00");
    });

    it("should handle negative milliseconds (no hours)", () => {
      expect(millisecondsToDuration(-30000)).toBe("-00:30");
    });

    it("should handle negative milliseconds (with hours)", () => {
      expect(millisecondsToDuration(-3723000)).toBe("-1:02:03");
    });

    it("should handle negative milliseconds less than -86400000 (1 day)", () => {
      expect(millisecondsToDuration(-90061000)).toBe("-25:01:01");
    });
  });

  describe("millisecondsToSeconds", () => {
    it("should convert milliseconds to seconds", () => {
      expect(millisecondsToSeconds(5000)).toBe(5);
    });

    it("should handle milliseconds equal to 0", () => {
      expect(millisecondsToSeconds(0)).toBe(0);
    });

    it("should handle negative milliseconds", () => {
      expect(millisecondsToSeconds(-3000)).toBe(-3);
    });

    it("should handle milliseconds with fractional seconds", () => {
      expect(millisecondsToSeconds(12345.6789)).toBeCloseTo(12.3456789, 6);
    });
  });
});
