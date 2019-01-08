/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
const assert = require("assert");
const ExtError = require("../");
const err = new ExtError("my code", "my message", "my type");
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
	it("stack not includes ExtError", () => {
		assert(!err.stack.includes('at new ExtError'));
	});
	it("instanceof Error", () => {
		assert(err instanceof Error);
	});
	it("toString", () => {
		assert(err.toString() === "ExtError\n\tCode: my code\n\tMessage: my message\n");
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
