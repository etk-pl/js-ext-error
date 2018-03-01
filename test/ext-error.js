/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";
const assert = require("assert");
const ExtError = require("../");
describe("ExtError", () => {
	const err = new ExtError("my code", "my message", "my type");
	it("name", () => {
		assert(err.name === "ExtError");
	});
	it("code", () => {
		assert(err.code === "my code");
	});
	it("message", () => {
		assert(err.message === "my message");
	});
	it("type", () => {
		assert(err.type === "my type");
	});
	it("stack", () => {
		assert(typeof err.stack === "string");
	});
	it("instanceof Error", () => {
		assert(err instanceof Error);
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
	it("type", () => {
		assert(err.type === "");
	});
});