const fs = require ('fs');

let k = fs.readFileSync(process.argv[2],"utf-8").split('\n').length - 1;

console.log(k);




