import moment from "moment";
import { describe, expect, test, vi } from "vitest";

describe("Advance testing", () => {
  // Parameterized Tests
  function isEven(num) {
    return num % 2 === 0;
  }

  test.each([
    [2, true],
    [3, false],
    [0, true],
    [-4, true],
  ])("isEven(%i) should return %s", (input, expected) => {
    expect(isEven(input)).toBe(expected);
  });
});

describe("Advance testing", () => {
  //    Testing Side Effects

  let counter = 0;

  function increment() {
    counter++;
  }

  test("increment should increase counter by 1", () => {
    increment();
    expect(counter).toBe(1);
  });
});
describe("Advance testing", () => {
  // Testing Performance

  function heavyComputation() {
    let sum = 0;
    for (let i = 0; i < 1e6; i++) {
      sum += i;
    }
    return sum;
  }

  test("heavyComputation should complete within 50ms", () => {
    const start = performance.now();
    heavyComputation();
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
  });
});
describe("Advance testing", () => {
  // Testing Environment Variables

  function getApiUrl() {
    return process.env.API_URL || "https://default-api.com";
  }

  test("getApiUrl should return the correct URL", () => {
    process.env.API_URL = "https://test-api.com";
    expect(getApiUrl()).toBe("https://test-api.com");

    delete process.env.API_URL;
    expect(getApiUrl()).toBe("https://default-api.com");
  });
});
describe("Advance testing", () => {
  // Testing Third-Party Libraries

  vi.mock("moment", () => ({
    default: vi.fn(() => ({
      format: vi.fn(() => "2023-10-01"),
    })),
  }));

  test("moment should return mocked date", () => {
    const date = moment().format("YYYY-MM-DD");
    expect(date).toBe("2023-10-01");
  });
});

describe("Advance testing with generated case", () => {
  // Function to check if a number is even
  function isEven(num: number): boolean | undefined {
    if (Number.isNaN(num)) {
      return undefined; // Return undefined for NaN
    }
    return num % 2 === 0;
  }

  // Generate an array of test data (numbers from 1 to 30) and their expected results
  const testData: [number, boolean | undefined][] = Array.from(
    { length: 300 },
    (_, index) => index + 1
  ).map((d: number) => {
    return [d, isEven(d)];
    // return [d, true];
  });

  // Run the parameterized tests
  test.each(testData)(
    "isEven(%i) should return %s",
    (input: number, expected: boolean | undefined) => {
      expect(isEven(input)).toBe(expected); // Assert the function output
    }
  );
});

// describe("Advance testing", () => {});
