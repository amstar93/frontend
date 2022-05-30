import {checkWords} from './utilshelpers.js';
import {checkIsWordCorrect} from "./utilshelpers.js";

let word = "сосна";
let timeOutId;

let buttonGame = document.querySelector(".game")
let inputWord = document.querySelector(".inputWord")
let buttonSubmit = document.querySelector(".submit")
let resultsElement = document.querySelector(".results")

function ClickButtonSubmit () {
    // clearTimeout (timeOutId)
    let resultColors = checkWords(word, inputWord.value)
    console.log(resultColors)
    for (let i = 0; i < 5; i++){
        resultsElement.innerHTML += "<button class=btn style='background-color: " + resultColors[i] + "'>" + resultColors[i] + "</button>"
    }
    resultsElement.innerHTML += "<br>"  
}

function ClickButtonGame () {
    buttonGame.style.display = "none"
    inputWord.style.display = "inline"
    buttonSubmit.style.display = "inline"
    timeOutId = setTimeout (GameOver, 4000)
}
function GameOver () {
    alert("Игра окончилась")
    buttonGame.style.display = "inline"
    inputWord.style.display = "none"
    buttonSubmit.style.display = "none"
    resultsElement.innerHTML = ""
}


buttonSubmit.onclick = ClickButtonSubmit
buttonGame.onclick = ClickButtonGame