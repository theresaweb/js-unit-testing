import * as chai from "chai";
const should = chai.should();
import Add from "../maths.js";

describe("addition-test", function () {
  it("should return 3 when passed 1 and 2", function () {
    const numberOne = 1;
    const numberTwo = 2;
    const expectedResult = 3;
    const actualResult = Add(numberOne, numberTwo);
    actualResult.should.equal(expectedResult);
    //expect(actualResult).to.equal(expectedResult);
  });
  it("should not return 3 when passed 1 and 4", function () {
    const numberOne = 1;
    const numberTwo = 4;
    const expectedResult = 3;
    const actualResult = Add(numberOne, numberTwo);
    expect(actualResult).to.not.equal(expectedResult);
  });
});
