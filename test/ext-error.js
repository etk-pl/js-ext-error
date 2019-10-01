/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
const assert = require("assert");
const ExtError = require("../");
const err = new ExtError("my code", "my message");
const errObj = {code:"ERR_SAMPLE_ERROR", message: "ERROR_SAMPLE_MESSAGE"};
describe("ExtError", () => {

	it("name", () => {
		assert(err.name === "ExtError");
	});
	it("code", () => {
		assert(err.code === "my code");
	});
	it("message", () => {
		assert(err.message === "my message");
	});
	it("stack is string", () => {
		assert(typeof err.stack === "string");
	});
	it("stack equals one that is set", () => {
		const err = new ExtError("my code", "my message", "at Error");
		assert.deepStrictEqual(err.stack, "at Error");
	});
	it("instanceof Error", () => {
		assert(err instanceof Error);
	});
	it("toString", () => {
		assert(err.toString() === "ExtError\n\tCode: my code\n\tMessage: my message\n");
	});

	it('should return new ExtError when called with error-like object', function () {
		assert(ExtError.from(errObj) instanceof ExtError);
	});

	it('should return new ExtError with provided message when called with error-like object', function () {
		assert.deepStrictEqual(ExtError.from(errObj).code, "ERR_SAMPLE_ERROR");
	});

	it('should return ExtError with message ERR_NOT_AN_ERRORLIKE when called without params', function () {
		assert.deepStrictEqual(ExtError.from().code, "ERR_NOT_AN_ERRORLIKE");
	});

	it('should return ExtError with message ERR_NOT_AN_ERRORLIKE when called with number', function () {
		assert.deepStrictEqual(ExtError.from(123).code, "ERR_NOT_AN_ERRORLIKE");
	});

	it('should return ExtError with message ERR_NOT_AN_ERRORLIKE when called with boolean', function () {
		assert.deepStrictEqual(ExtError.from(false).code, "ERR_NOT_AN_ERRORLIKE");
	});

	it('should return ExtError with message ERR_NOT_AN_ERRORLIKE when called with string', function () {
		assert.deepStrictEqual(ExtError.from("test").code, "ERR_NOT_AN_ERRORLIKE");
	});

	it('should return ExtError with message ERR_NOT_AN_ERRORLIKE when called with function', function () {
		assert.deepStrictEqual(ExtError.from(() => {}).code, "ERR_NOT_AN_ERRORLIKE");
	});
});
describe("ExtError defaults", () => {
	const err = new ExtError();
	it("name", () => {
		assert(err.name === "ExtError");
	});
	it("code", () => {
		assert(err.code === "");
	});
	it("message", () => {
		assert(err.message === "");
	});
	it("toString", () => {
		assert(err.toString() === "ExtError\n");
	});
});
