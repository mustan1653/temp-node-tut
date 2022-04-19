const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', "UTF8");
const second = readFileSync('./content/second.txt', "UTF8");

writeFileSync('./content/result-sync.txt', 
`Here is the result:  ${first}, ${second}`,
{flag: 'a'}
);
console.log('done with this text');
console.log('starting the next one');