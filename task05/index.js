let div = document.querySelector("div")
const baseURL = 'https://api.sampleapis.com/coffee/hot';
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data));

function displayData(data) {
    for (let i = 0; i < data.length; i++){
        console.log(data[i].title)
        console.log(data[i].description)
       div.innerHTML += "<button>" + data[i].title + "</button>"
    }
} div,innerHTML += "<br>"