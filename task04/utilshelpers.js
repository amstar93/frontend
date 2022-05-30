
export function checkWords(initialWord, userWord){
    let colors = []
    if (initialWord === userWord){
        console.log("ok")
    } else {
        console.log("no")
    }
    console.log(userWord)
    for (let i = 0; i < 5; i++){
        console.log(initialWord[i])
        console.log(userWord[i])
        if (initialWord[i] === userWord[i]){
            console.log("green")
            colors.push("green")
        } else  if (CheckLetInWord(userWord[i], initialWord)){
            console.log("yellow")
            colors.push("yellow")
        } else{
            console.log("grey")
            colors.push("grey")
        }
    }
    return colors;
}

export function checkIsWordCorrect(resultColors){
    return True
}

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

