import { should } from "chai";
import Add from "../maths.js";

describe("addition-test", function () {
  it("should return 3 when passed 1 and 2", function () {
    const numberOne = 1;
    const numberTwo = 2;
    const expectedResult = 3;
    const actualResult = Add(numberOne, numberTwo);
    actualResult.should.equal(expectedResult);
  });
});
