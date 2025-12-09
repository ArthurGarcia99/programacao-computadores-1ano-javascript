var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numerofigurinhas = parseInt(lines[0])
let figurinhascompradas = parseInt(lines[1])
let figurinhas = new Set();

for(let i = 2; i < 2 + figurinhascompradas; i++){
    figurinhas.add(parseInt(lines[i]));
}

let falta = numerofigurinhas - figurinhas.size

console.log(falta)