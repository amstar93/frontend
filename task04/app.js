let word = "сосна";
let input = document.querySelector("input")
let buttonSubmit = document.querySelector("button")
function ClickButtonSubmit () {
    if (word === input.value){
        console.log("ok")
    } else {
        console.log("no")
    }
    console.log(input.value)
    for (let i = 0; i < 5; i++){
        console.log(word[i])
        console.log(input.value[i])
        if (word[i] === input.value[i]){
            console.log("green")
        } else  if (CheckLetInWord(input.value[i], word)){
            console.log("yellow")
        } else{
            console.log("grey")
        }

    }
} 
buttonSubmit.onclick = ClickButtonSubmit
function CheckLetInWord(letter, word){
    // let letter = "п"
    // let word = "пират"
    for (let i = 0; i < 5; i++){
        console.log(word[i])
        if (letter === word[i]){
            return true
        } else {
            
        }
    } return false
}

let output = CheckLetInWord("g", "pirat")
console.log(output)