import * as chai from "chai";
const should = chai.should();
const assert = chai.assert;
const expect = chai.expect;
import * as sinon from "sinon";
import Add, { isAlive } from "../maths.js";

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

describe("isAlive tests", function () {
  it("should return true when ping returns true 3 times in a row", function () {
    const pinger = sinon.stub().returns(true);
    pinger.onCall(0).returns(true);
    pinger.onCall(1).returns(true);
    pinger.onCall(2).returns(true);
    const websiteIsAlive = isAlive(pinger);
    websiteIsAlive.should.be.true;
  });
  it("should not return true when ping does not return true 3 times in a row", function () {
    const pinger = sinon.stub().returns(true);
    pinger.onCall(0).returns(true);
    pinger.onCall(1).returns(true);
    pinger.onCall(2).returns(false);
    const websiteIsAlive = isAlive(pinger);
    websiteIsAlive.should.be.true;
  });
  it("should return and error when ping throws an error", function () {
    const pinger = sinon.stub().returns(true);
    pinger.throws(new Error("ping threw an error"));
    const error = () => {
      isAlive(pinger);
    };
    error.should.throw("ping threw an error");
  });
});
