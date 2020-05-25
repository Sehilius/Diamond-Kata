function generateDiamond(letter){
    //array for input letters
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    //create placeholder
    var fill = "-"
    //get index of input for iteration
    const index = alphabet.indexOf(letter) + 1
    //save index of input letter seperately
    let input = alphabet.indexOf(letter) + 1
    //create empty diamond
    let diamond = ""

    let fillOuter = input-1
    let fillInner = 1
    let lineA = ""

    function repeatStringNumTimes(str, num) {
        return str;
      }

    if (!alphabet.includes(letter)){
    return "Please enter a valid letter from the latin alphabet"
    }
    
    
    if(input>1){
    lineA+=fill.repeat(fillOuter)+"A"+fill.repeat(fillOuter)+"\n"
    diamond+=fill.repeat(fillOuter)+"A"+fill.repeat(fillOuter)+"\n"
    fillOuter = fillOuter - 1
    
    

    for (let i = 2; i<=index; i++){
        
        diamond += fill.repeat(fillOuter) + alphabet[i-1] + fill.repeat(fillInner) + alphabet[i-1] + fill.repeat(fillOuter) + "\n"

        fillOuter= fillOuter - 1
        fillInner= fillInner + 2
    }


    fillOuter+=2
    fillInner -= 4

    for (let i = input - 1; i > 1; i--){
        
        diamond += fill.repeat(fillOuter) + alphabet[i-1] + fill.repeat(fillInner) + alphabet[i-1] + fill.repeat(fillOuter) + "\n"

        fillOuter= fillOuter + 1
        fillInner= fillInner - 2
    }

diamond+=lineA.substring(0, lineA.length - 1)

}
else{
    diamond+="A"
}

return diamond
}
//generateDiamond("C")

//console.log(generateDiamond("T"))
//console.log(input)

module.exports = {
    generateDiamond
}