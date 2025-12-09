let input = "10 10 3\n5 5\n10 10\n5 25"
let lines = input.split(/\s+/)
console.log(lines)

let i = 0
while(i < lines.length){
    let X = parseInt(lines[i++])
    let Y = parseInt(lines[i++])
    let P = parseInt(lines[i++])
    for(let j = 0; j < P; j++){
        let x1 = parseInt(lines[i++])
        let y1 = parseInt(lines[i++])
        if((x1 <= X && y1 <= Y) || (x1 <= Y && y1 <= X)){
            console.log("Sim")
        } else {
            console.log("Nao")
        }
    }
}