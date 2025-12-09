var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines[0]);

for(let i = 0; i < number; i++){
    let somatorialeds = 0;
    
    let number2 = String(lines);
    
    for(let j = 0; j < number2.length; j++){
        if(number2[j] == '1'){
            somatorialeds += 2;
        } else if(number2[j] == '2' || number2[j] == '3' || number2[j] == '5'){
            somatorialeds += 5;
        } else if(number2[j] == '4'){
            somatorialeds += 4;
        } else if(number2[j] == '6' || number2[j] == '9' || number2[j] == '0'){
            somatorialeds += 6;
        } else if(number2[j] == '7'){
            somatorialeds += 3;
        } else if(number2[j] == '8'){
            somatorialeds += 7;
        }
    }
    console.log(somatorialeds + " leds")
}