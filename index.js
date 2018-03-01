/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";

/**
 * @property name
 * @property stack
 * @property code
 * @property message
 */
class ExtError extends Error {
	/**
	 *
	 * @param code
	 * @param message
	 */
	constructor(code, message) {
		super();
		this.name = this.constructor.name;
		this.stack = (new Error()).stack;
		this.code = code || "";
		this.message = message || "";
	}

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
}

module.exports = ExtError;
