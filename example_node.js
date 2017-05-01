var prolog = require("./jsProlog.js");
var program = new prolog.program();
program.addRule("human(socrates).");
program.addRule("mortal(X) :- human(X).");
var answer = program.askQuery("mortal(socrates).");
console.log(answer.value);




