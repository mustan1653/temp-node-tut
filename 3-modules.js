// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum) 
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alterantive-flavour');
require('./7-mind_grenade');

console.log(data);
sayHi('john');
sayHi(names.juzer);
sayHi(names.mustan);