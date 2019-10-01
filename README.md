# ExtError
```bash
$ npm i exterror
```
## Creating new ExtError
#### ExtError(code, message [,stack]);

##### Example usage
```js
const err = new ExtError("ERR_EXAMPLE_ERROR", "Test error message", "my stack");
```
***
## ExtError.from(error)
Creates error from error-like object
##### Example usage
```js
const errObj = {code:"ERR_EXAMPLE_CODE", message:"Test error message"};
const err = ExtError.from(errObj);
```
***
## .toJSON()
Returns object from error in structure like {code, message}
##### Example usage
```js
const errObj = {code:"ERR_EXAMPLE_CODE", message:"Test error message"};
const err = ExtError.from(errObj);
err.toJSON();
```
***
## .toString()
##### Example usage
```js
const errObj = {code:"ERR_EXAMPLE_CODE", message:"Test error message"};
const err = ExtError.from(errObj);
err.toString();
```
***