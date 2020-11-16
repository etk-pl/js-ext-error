/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";

/**
 * @property name
 * @property code
 * @property message
 */
class ExtError extends Error {
	/**
	 *
	 * @param code
	 * @param message
	 * @param stack
	 * @param [data]
	 */
	constructor(code, message, stack, data) {
		super();
		this.name = this.constructor.name;
		this.code = code || "";
		this.message = message || "";
		this.data = data;
		if (stack) {
			this.stack = stack;
		}
	}

	/**
	 * Creates new error from error-like object
	 * @param {object} error Error-like object
	 * @param [data]
	 * @returns {ExtError}
	 */
	static from(error, data) {
		if (error && typeof error === "object") {
			return new ExtError(error.code, error.message, error.stack, data);
		}
		if (error && typeof error === "string") {
			return new ExtError("ERR_MISSING_ERROR_CODE", error);
		}
		return new ExtError("ERR_NOT_AN_ERRORLIKE", "Value is not error-like");
	}

	/**
	 *
	 * @returns {string}
	 */
	toString() {
		let name = this.name;
		name = (name === undefined) ? "Error" : String(name);
		let code = this.code;
		code = (code === undefined) ? "" : String(code);
		let message = this.message;
		message = (message === undefined) ? "" : String(message);
		let msg = name + "\n";
		if (code !== "") {
			msg += "\tCode: " + code + "\n";
		}
		if (message !== "") {
			msg += "\tMessage: " + message + "\n";
		}
		return msg;
	}

	/**
	 *
	 * @returns {{code: string, message: string}}
	 */
	toJSON() {
		return {
			code: this.code,
			message: this.message
		};
	}
}

module.exports = ExtError;
