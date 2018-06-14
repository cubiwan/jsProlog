[:es:](https://cubiwan.github.io/jsProlog/README_es) | [:uk:](https://cubiwan.github.io/jsProlog/)

# jsProlog

Interprete de Prolog en JS 

El interpreter ha sido desarrollado por Jan, puedes encontrarlo en http://ioctl.org/logic/prolog-latest Yo solo he encapsulado el mismo y creado una API para facilitar su uso como librería

## Carga

### Navegador

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
devuelve un array con todas la regala en formato texto (prolog)

```js	
prolog.addRule(rule);
```
Añade una nueva regla (no distingo entre hechos y reglas)

```js
prolog.askQuery(query)
```
Ejecuta una query y devuelve un array con sus respuestas.

```js
Answer(name, value){
  this.name = name;
  this.value = value;
  this.print = function(){...};
}
```
_name_: nombre de la variable

_value_: valor

Cuando la respuesta es boleana y cierta el nombre será '_' y el valor true (si no hay respuesta significa falso)

## Ejemplo

```js
program.addRule("human(socrates).");
program.addRule("mortal(X) :- human(X).");
var answer = program.askQuery("mortal(socrates).");
console.log(answer.value);
```

## Demo

Puedes probar tu codigo en prolog aqui: [demo](https://cubiwan.github.io/jsProlog/demo.html)
