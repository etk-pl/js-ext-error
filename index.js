/**
 * @author Michał Żaloudik <ponury.kostek@gmail.com>
 */
"use strict";

/**
 * @property name
 * @property stack
 * @property code
 * @property message
 * @property type
 */
class ExtError extends Error {
	/**
	 *
	 * @param code
	 * @param message
	 * @param type
	 */
	constructor(code, message, type) {
		super();
		this.name = this.constructor.name;
		this.stack = (new Error()).stack;
		this.code = code || "";
		this.message = message || "";
		this.type = type || "";
	}
}

module.exports = ExtError;
