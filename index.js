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
	 */
	constructor(code, message, stack) {
		super();
		this.name = this.constructor.name;
		this.code = code || "";
		this.message = message || "";
		if(stack) {
            this.stack = stack;
        }
	}

    /**
     * Creates new error from error-like object
     * @param {object} error Error-like object
     * @returns {ExtError}
     */
	static from(error) {
	    if(error && typeof error === "object") {
	        return new ExtError(error.code, error.message, error.stack);
        }
        return new ExtError("ERR_NOT_AN_ERRORLIKE", "Value is not error-like");
    }

	/**
	 *
	 * @returns {string}
	 */
	toString() {
		const obj = Object(this);
		if (obj !== this) {
			throw new TypeError();
		}
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
			message: this.message,
            stack: this.stack
		};
	}
}

module.exports = ExtError;
