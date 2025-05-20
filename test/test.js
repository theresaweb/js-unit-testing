import * as chai from "chai";
const should = chai.should();
const assert = chai.assert;
const expect = chai.expect;
import * as sinon from "sinon";
import Add from "../maths.js";

describe("addition-test", function () {
  it("should return 3 when passed 1 and 2", function () {
    const numberOne = 1;
    const numberTwo = 2;
    const expectedResult = 3;
    const actualResult = Add(numberOne, numberTwo);
    // actualResult.should.equal(expectedResult);
    //expect(actualResult, "expect to equal").to.equal(expectedResult);
    assert.equal(actualResult, expectedResult, "expect to equal");
  });
  it("should not return 3 when passed 1 and 4", function () {
    const numberOne = 1;
    const numberTwo = 4;
    const notExpectedResult = 3;
    const actualResult = Add(numberOne, numberTwo);
    // expect(actualResult, "expect not to equal").to.not.equal(notExpectedResult);
    assert.notEqual(actualResult, notExpectedResult, "expect not to equal");
  });
});
describe("Spy test", function () {
  it("should log result of Add function", function () {
    const numberOne = 1;
    const numberTwo = 2;
    const logSpy = sinon.spy(console, "log");
    Add(numberOne, numberTwo, logSpy);
    //logSpy.called.should.be.true;
    logSpy.calledWith(3).should.be.true;
  });
});
