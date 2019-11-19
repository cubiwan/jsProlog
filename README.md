[Español](https://cubiwan.github.io/jsProlog/README_es) # [English](https://cubiwan.github.io/jsProlog/)

# jsProlog &nbsp;&nbsp;&nbsp;&nbsp;<a href='https://ko-fi.com/I2I012UF3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

Prolog interpreter in JS 

First, the interpreter was made by Jan, you can find it in http://ioctl.org/logic/prolog-latest I only encapsulates it and creates a few funtions to access.

## Load

### Browser

```html
<script src="jsProlog.js"></script>
```
```js
var program = new jsProlog.program();
```

### Node

```js
var prolog = require("./jsProlog.js");
var program = new prolog.program();
```

## Interface

```js
prolog.getRules();
```
Return an array with all rules in text (prolog code)

```js	
prolog.addRule(rule);
```
Add a new rule (I don't make diference between facts and rules)

```js
prolog.askQuery(query)
```
Execute one query return an array of Answers:

```js
Answer(name, value){
  this.name = name;
  this.value = value;
  this.print = function(){...};
}
```
_name_: variable name

_value_: value

When answer is a boolean answer when is true name is '_' and value is true (no answer means false)

## Example

```js
program.addRule("human(socrates).");
program.addRule("mortal(X) :- human(X).");
var answer = program.askQuery("mortal(socrates).");
console.log(answer.value);
```

## Demo

Test your prolog code here: [demo](https://cubiwan.github.io/jsProlog/demo.html)
