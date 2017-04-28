# jsProlog

Prolog interpreter in JS

First, the interpreter was made by Jan, you can find it in http://ioctl.org/logic/prolog-latest I only encapsulates it and creates a few funtions to access.

## Load

```html
<script src="jsProlog.js"></script>
```

## Initialice

```js
var prolog = new jsProlog();
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
prolog.loadProgram = function(rules){
```
Load text ad program, each lines is a rule

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
